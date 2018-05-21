import { Settingservice } from './../../service/settings';
import { QuotePage } from './../quote/quote';
import { QuoteService } from './../../service/quotes';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Quote } from '../../data/quotes.interface';


@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage implements OnInit {
  quotes: Quote[] = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _quoteservice: QuoteService,
    private settingService:Settingservice,
    private modalCtrl: ModalController) {
  }

  ngOnInit() {
    this.quotes = this._quoteservice.getFavorite();
    console.log(this.quotes)
  }
  onQuoteLoad(quote:Quote){
   const modal= this.modalCtrl.create(QuotePage,quote);
   modal.present();
  modal.onDidDismiss(
    (remove:boolean)=>{
      if(remove){
      this.onRemoveFavorite(quote);
      }
    }
  )

  }
  onRemoveFavorite(quote:Quote){
    this._quoteservice.removeQuoteFromFavorite(quote);
    this.quotes=this._quoteservice.getFavorite();
  //   const position=this.quotes.findIndex((quoteEl:Quote)=>{
  //     return quote.id===quoteEl.id
  // })
  // this.quotes.splice(position,1);
  }

  getBackgroundColor(){
  return this.settingService.getToggleState()? 'altQuoteBackground':'quotebackground';
  }

}
