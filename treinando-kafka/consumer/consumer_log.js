const Kafka = require('no-kafka')

const consumer = new Kafka.SimpleConsumer({"connectionString": "192.168.58.226:9092"})
var data = function(messageSet, topic, partition){
    messageSet.forEach(function(m){
        var value = m.message.value.toString('utf8')
        console.log(value)
    })
}

return consumer.init().then(function(){
    return consumer.subscribe('kafka-python-topic', data)
})