from kafka import KafkaProducer
import json
import random
from time import sleep
from datetime import datetime

# create instance of the kafka producer
producer = KafkaProducer(bootstrap_servers='IP_CONTAINER:9092',
                         value_serializer=lambda v: str(v).encode('utf-8'))
topic_name = "kafka-python-topic"
# call the producer .send method with a producer record
print("Crtl+c to Stop")
while True:
    producer.send(topic_name, random.randint(1, 999))
