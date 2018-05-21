import { Quote } from "../data/quotes.interface";

export class QuoteService{
    public favoriteQuote:Quote[]=[];
    addToFavorite(quote:Quote){
        this.favoriteQuote.push(quote);
        console.log(this.favoriteQuote);
    }
    removeQuoteFromFavorite(quote:Quote){
        const position=this.favoriteQuote.findIndex((quoteEl:Quote)=>{
            return quote.id===quoteEl.id
        })
        this.favoriteQuote.splice(position,1)
    }

    getFavorite(){
        console.log(this.favoriteQuote.slice())
        return this.favoriteQuote;
    }

    isFavoriteQuote(quote:Quote){
        return this.favoriteQuote.find((quoteEl:Quote)=>{
            return quoteEl.id==quote.id;
        })
    }
}