import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  
  constructor(private languageService : LanguageService) {
    
   }
  
  para01 : string[] = [
    `After the military coup on 1st February 2021, the people in Myanmar expressed non-violent protests. Nevertheless,
    the military junta used brutal control measures and violent crack down upon non-violent protestors. Traumatized patients can\’t receive proper medical treatments. 
    Medical professionals, facilities and patients came under attack. Some died and some had to flee away.`,

   `ဖေဖော်ဝါရီ ၁ ရက်နေ့အာဏာသိမ်းပြီးနောက် ထိုအချင်းအရာကိုဆန့်ကျင်သောအားဖြင့် ပြည်သူများအားလုံးငြိမ်းချမ်းစွာဆန္ဒထုတ်ဖော်ခဲ့ကြသော်လည်း စစ်ကောင်စီဘက်မှ အကြမ်းဖက်နှိမ်နှင်းခြင်းများသာဖြစ်ပွားခဲ့သည်။ ပစ်ခတ်မှုကြောင့်ထိခိုက်ဒဏ်ရာရသူများမှာ ဆေးကုသခွင့်မရရှိကြသကဲ့သို လူနာများကို ဆေးကုသပေးရန်ကြိုးစားသော ဆရာဝန်သူနာပြု၊ ကျန်းမာရေးဝန်ထမ်းများ၊ လူနာတင်ယာဉ်တိုမှာ ရိုက်နှက်ဖမ်းဆီးခံရသည်။ အချိုမှာထွက်ပြေးတိမ်းရှောင်ကြရသည်။ 
   ဆေးကုသခွင့်မရ၍ ဒဏ်ရာရသူများသေဆုံးခဲ့ကြရသည်။`
  ]

  para02 : string[] = [
    `Ongoing projects 1. Training and medical supply project  (a) First aid Training & First aid kits supply  (b) Medic Training and medic back pack supply  (c) Trauma Refresher Courses for doctor and nurses & medical equipment supply 2. Forward Surgical Team/ Mobile surgical team project 3. Primary Health Care to IDPs & civilians`,
    `1. အရေးပေါ်အသက်ကယ်သင်တန်းများပေးခြင်းနှင့် အရေးပေါ်ဆေးအိတ်ထောက်ပံ့ခြင်း။  2. တပ်ရင်းတပ်ဖွဲများတွင် ဆေးတပ်များပေါ်ပေါက်၍ အင်အားပိုမိုကောင်းမွန်လာစေရန် ဆေးတပ်သင်တန်းပေးခြင်းနှင့် ဆေးအိတ်များထောက်ပံ့ပေးခြင်း။ 3. ဆရာဝန်သူနာပြုတိုအတွက် ထိခိုက်ဒဏ်ရာပြန်လည်လေ့ကျင့်ခြင်းသင်တန်းနှင့် လိုအပ်သောဆေးပစ္စည်းများထောက်ပံ့ခြင်း။  4. ရှေ့တန်းခွဲစိတ်ကုသရေးအဖွဲ။`
  ]
  language : string = "mu";

  

  ngOnInit(): void {
    this.languageService.subject.subscribe((res) => this.change_lan(res));
  }

  change_lan(lan : any) : void {
    this.language = lan;
  }

  ngOnChanges() : void {
  }



}
