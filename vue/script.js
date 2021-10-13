var app = new Vue({
    el: '#app',
    data: {
        quotes_api_url: "https://type.fit/api/quotes",
        quotes: [],
        currentQuote: "",
        currentAuthor: ""
    },
    mounted: function() {
        axios
        .get(this.quotes_api_url)
        .then(
            (result) => {
                // console.log(result.data);
                this.quotes = result.data
                //  console.log(this.quotes);
                this.getRanQuote();
            }
        )

    },
    methods: {
        getRanQuote: function () {
            var q = Math.floor(Math.random() * this.quotes.length);

            this.currentQuote = this.quotes[q].text;
            this.currentAuthor = this.quotes[q].author;
        }
    }
})