import { QuoteService } from './../../service/quotes';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Quote } from '../../data/quotes.interface';


@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {
  // quotes:Quote[];
  quotescategory: { category: string, quotes: Quote[], icon: string };
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alrtCtrl: AlertController,
    private _quoteservice:QuoteService
  ) {
  }
  ngOnInit() {
    this.quotescategory = this.navParams.data;
  }

  AddToFavorite(selectdQuote: Quote) {
    const alert = this.alrtCtrl.create({
      title: 'Add to Favorite!',
      message: 'Are You Sure, You want to add it?',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Save',
        handler: data => {
          this._quoteservice.addToFavorite(selectdQuote);
          
        }
      }]
    });

    alert.present();
  }

  removeFromFavorites(quote:Quote){
    this._quoteservice.removeQuoteFromFavorite(quote);
  }
  isFavorite(quote:Quote){
    return this._quoteservice.isFavoriteQuote(quote);
  }
}
