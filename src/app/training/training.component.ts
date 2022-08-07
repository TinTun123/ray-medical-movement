import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {

  para01 : string[] = [
    `“When someone gets injured, the closest person becomes a doctor”`,
    `"ထိခိုက်ဒဏ်ရာရသောအခါ အနီးဆုံးတွင်ရှိသူသည် ကယ်တင်ရှင်ဖြစ်လာသည်" `
  ]

  para02mm : string[] = [
    `မိမိဘေးပါတ်ဝန်းကျင်ရှိ တစ်စုံတစ်ဦး ထိခိုက်ဒဏ်ရာရရှိင်လျှင် ရှေးဦးသူနာပြုစုအသက်ကယ်ရန်နှင့် ဘေးကင်းလုံခြုံစွာကယ်ထုတ်တတ်စေရန်။`,
    `ဒဏ်ရာရရှိသူ ၏ အခြေအနေပိုမိုမဆိုးရွားလာစေရန် နှင့် ကုသမှု(Definitive care) မရနိုင်သေးသည့်အချိန်တွင် အရေးပေါ်အခြေအနေကိုထိန်းထားနိုင်စေရန်။`,
    `ထိခိုက်ဒဏ်ရာရသူများကို ကျွမ်းကျင်စွာကယ်ထုတ်၍ နောက်တန်းရှိဆေးရုံများသို ချိတ်ဆက်ပိုဆောင်နိုင်ရန်။`,
    `မလိုလားအပ်သော အသက်အန္တရာယ်ဆုံးရှုးမှုများကို လျော့ချပေးနိုင်ရန်။`
  ];

  para02mu : string[] = [
    ``,
    ``,
    ``,
    ``
  ]

  para03mu : string[] = [
    ``,
    ``,
    ``,
    ``
  ];

  para03mm : string[] = [
    `ရှေ့တန်းထွက်မည့် ရဲဘော်တိုင်း စစ်မြေပြင်အသက်ကယ်နည်းများကို သိကျွမ်းထားရန်။`,
    `တပ်ရင်းတိုင်းတွင် ရှိသော ရဲဘော်ဦးရေနှင့်အညီ ၁၀:၁ နူန်းထားအတိုင်း ဆေးတပ်(Medic) များ ဖွဲစည်း၍ စစ်မြေပြင်တွင် သွေးထွက်လွန်ဒဏ်ရာများကို အရေးပေါ်ဆေးကုသမူ ပေးနိုင်ရန်။`,
    `ထ်ိခိုက်ဒဏ်ရာ အပြင်းအထန်ပေါ်မူတည်၍ ကျန်းမာရေးကွန်ယက်ကို ချိတ်ဆက်ပိုဆောင်နိုင်ရန်။`,
    `တပ်ရင်းအလိုက် သွေးအလှူရှင်အသင်း ဖွဲစည်းနိုင်ရန်။`
  ]

  para04: string[] = [
    ``,
    `လူနာကယ်ထုတ်စဉ်နှင့် သယ်ဆောင်ရာတွင် လမ်းကြောင်းများပိတ်ဆိုခြင်း၊ ကယ်ထုတ်ချိန်ကြာမြင့်ခြင်း၊ သွားလာရခက်ခဲခြင်းတိုကြောင့် အချိန်မှီဆေးကုသခွင့်မရခြင်း၊ သွေးထွက်လွန်ခြင်း၊ အသက်အန္တရာယ်ဆုံးရှုးခြင်းများကြုံတွေ့နိုင်သည်။ အရေးပေါ်သွေးတိတ်အောင်ပြုလုပ်ခြင်း၊ ရှေးဦးသူနာပြုစုခြင်းများကို တတ်ကျွမ်းထားပါကအသက်ပေါင်းများစွာကိုကယ်တင်နိုင်မည်ဖြစ်သည်။ လူတိုင်းသည် အရေးပေါ်အသက်ကယ်ပေးနိုင်သည့်သူများဖြစ်လာနိုင်ပါသည်။`
  ]

  imgcnt00 : string[] = [
    `Demonstration of how to drag a patient with firefighter position (Demosoe)`,
    `လူနာကိုမှောက်လျက်အနေအထားဖြင့်ဆွဲထုတ်နည်းကိုပြသနေစဥ် (ဒီမောဆိုး)`
  ]

  imgcnt01 : string[] = [
    `Demonstration of simple pressure applying to the proximal arm in distal arterial injury patient (Demosoe)`,
    `လက်ဖျားပိုင်းသွေးထွက်လွန်နေသောလူနာကို လက်မောင်းရင်းတွင်ဖိထားခြင်းဖြင့် သွေးတိတ်နိုင်ကြောင်းလက်တွေ့ပြနေစဉ် (ဒီမောဆိုး)`
  ]

  imgcnt02 : string[] = [
    `Demonstration of pelvic binder application (Pekhon)`,
    `တင်ပါးဆုံကွင်းကြပ်စည်းခြင်းကိုလက်တွေ့ပြနေစဉ် (ဖယ်ခုံ)`
  ]

  imgcnt03 : string[] = [
    `Demonstration of first aid care to eviscerated patient (Demosoe)`,
    `အူထွက်သောလူနာကို ဒူးနှစ်ဖက်ထောင်ထားဖိုလိုကြောင်းပြသနေစဥ် (ဒီမောဆိုး)`
  ]

  imgcnt04 : string[] = [
    `Photo section for application of tourniquet`,
    `သွေးထိန်းပါတ်တီးစည်းရမည့်နေရာများကိုပြသစဥ်`
  ]

  constructor(private languageService : LanguageService) { }
  language : string = 'mu';
  ngOnInit(): void {
    this.languageService.subject.subscribe((lan) => {
      this.change_lan(lan);
    })
  }

  change_lan(lan : any) {
    this.language = lan;
  }

}
