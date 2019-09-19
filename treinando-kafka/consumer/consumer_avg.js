const Kafka = require('no-kafka')

//create an instance of the kafka consumer
var valueSum = 0
var count = 1

const consumer = new Kafka.SimpleConsumer({ "connectionString": "192.168.58.226:9092" })
var data = function (messageSet, topic, partition) {
    messageSet.forEach(function (m) {
        var value = parseInt(m.message.value.toString('utf8'))
        valueSum = valueSum + value
        console.log(valueSum / count)
        count += 1
    })
}

// subscribe to the kafka topic
return consumer.init().then(function(){
    return consumer.subscribe('kafka-python-topic',data)
})