"""
This script consists of the necessary configuration setup for proper functioning of the application.
"""

# below set of configuration is to connect to the AWS RDS MySQL
mysql_db_conf = {
    "host" : "instabaserds.c16otsowwndg.us-east-1.rds.amazonaws.com",
    "port" : 3306,
    "user" : "admin",
    "password" : "123Abcd!"
}

# below set of configuration is to connect to the AWS Redshift
redshift_db_conf = {
    "host" : "redshift-cluster-cs527-team9.cpbazbmgbqsl.us-east-1.redshift.amazonaws.com",
    "port" : 5439,
    "user" : "awsuser_527_team9",
    "password" : "CS527_team9",
    "db_schema" : "dev"
}