"""
This script serves as the backend endpoint for various api's being used in the application.
"""

from flask import Flask, request, jsonify, send_file
from utils.db_connector import MysqlDBInstance, RedshiftDBInstance
from utils.autocomplete import MysqlAutoComplete, RedshiftAutoComplete
from flask_cors import CORS

app = Flask(__name__)

# establishing cross origins
CORS(app)


@app.route('/suggest', methods=["GET"])
def suggest():
    prefix = request.args.get("prefix")
    database = request.args.get("database")

    prefix = prefix.lower()
    database = database.lower()

    suggestor = None

    if database == "mysql":
        suggestor = MysqlAutoComplete()
    elif database == "redshift":
        suggestor = RedshiftAutoComplete()

    suggestions = suggestor.get_suggestions(prefix)

    response = {
        "suggestions": suggestions
    }

    return jsonify(response)


@app.route("/query", methods=["GET", "POST"])
def query_parse():
    database = request.args.get("database")
    database = database.lower()

    query = request.args.get("query")
    # query = query
    query_list = list(map(str, query.split(';')))

    schema = request.args.get("schema")
    schema = schema.lower()

    result_list = []

    if database == "mysql":
        db_ins = MysqlDBInstance()
        for que in query_list:
            if que != '':
                db_ins.create_connection(schema)
                state, query, time, columns, results = db_ins.run_query(que)
                response = {
                    "state": state,
                    "time": time,
                    "columns": columns,
                    "results": results,
                    "query": query
                }
                result_list.append(response)
                db_ins.close_connection()
        return jsonify(result_list)
    elif database == "redshift":
        db_ins = RedshiftDBInstance()
        for que in query_list:
            if que != '':
                db_ins.create_connection(schema)
                state, query, time, columns, results = db_ins.run_query(que)
                response = {
                    "state": state,
                    "time": time,
                    "columns": columns,
                    "results": results,
                    "query": query
                }
                result_list.append(response)
                db_ins.close_connection()
        return jsonify(result_list)


@app.route("/erdiagram", methods=["GET"])
def get_erdiagram():
    er_type = request.args.get("type")
    filename = ""
    if er_type == "concept":
        filename = "resources/images/conceptual_er.png"
    elif er_type == "logical":
        filename = "resources/images/logical_er.png"
    return send_file(filename, mimetype="image/png")


if __name__ == "__main__":
    app.run("192.168.0.165", debug=True)
