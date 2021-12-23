const Counter = {
    data() {
        return {
            counter: 0
        }
    },
    mounted() {
        setInterval(() => {
            this.counter++
        }, 1000)
    },
}

Vue.createApp(Counter).mount('#counter')

const AttrBind = {
    data() {
        return {
            message: "You loaded this on " + new Date().toLocaleString() 
        }
    }
}

Vue.createApp(AttrBind).mount('#bind-attr')

const EventHandling = {
    data() {
        return {
            message: "Hello Vue.js!"
        }
    },
    methods: {
        reverseMessage() {
            this.message = this.message
                .split('')
                .reverse()
                .join('')
        }
    }
}

Vue.createApp(EventHandling).mount('#event-handling')

const TwoWayBinding = {
    data() {
        return {
            message: "Hello Vue!"
        }
    }
}

Vue.createApp(TwoWayBinding).mount('#two-way-binding')

const ConditionalRendering = {
    data() {
        return {
            seen: true
        }
    }
}

Vue.createApp(ConditionalRendering).mount('#conditional')

const ListRendering = {
    data() {
        return {
            todos: [
                {text: 'Learn JS'},
                {text: 'Learn Vue'},
                {text: 'Build something awesome'}
            ]
        }
    }
}

Vue.createApp(ListRendering).mount('#list-rendering')

