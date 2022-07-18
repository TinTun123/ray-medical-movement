import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-whoweare',
  templateUrl: './whoweare.component.html',
  styleUrls: ['./whoweare.component.scss']
})
export class WhoweareComponent implements OnInit {

  constructor(private languageService : LanguageService) { }
  language : string = 'mu';
  para01 : string[] = [
    `“From the medical movement towards the better health care system and save lives”`,
    `“ကျန်းမာခြင်းအရွေ့မှသည် ကောင်းသောစနစ်ကိုဦးတည်၍ အသက်ပေါင်းများစွာကိုကယ်တင်မည်။”`
  ]

  para02 : string[] = [
    `From the evolution of healthcare systems to the healthier environment lessen from pain and suffering. 2. As good health system leads us to live healthily, our movements are willing to make a turning point for better health systems. 3. To prevent untimely deaths and reduce the complications following trauma and diseases.`,
    `၁။ ကျန်းမာရေးနှင့်ပါတ်သက်သောစနစ်များ ဆင့်ကဲပြောင်းလဲမှုမှတဆင့် အများပြည်သူအကျိုးပြုအသက်ကယ်ကာ ရောဂါဘယများကင်းဝေးသက်သာပျောက်ကင်းစေရန်။
    ၂။ ကျန်းမာစွာအသက်ရှင်နေထိုင်ရန် "ကျန်းမာရေးစနစ်"ကဦးဆောင်သည်ဖြစ်ရာ စနစ်ကောင်းများစွာပေါ်ထွန်းလာစေရန်
    အရွေ့အပြောင်းတစ်ခုအဖြစ်ရပ်တည်မည်။
    ၃။ မလိုလားအပ်သော အသက်အန္တရာယ်ဆုံးရှုးမှုများနှင့် ထိခိုက်ဒဏ်ရာ၊ ရောဂါများ ၏နောက်ဆက်တွဲဆိုးကျိုးများကို 
    လျော့ချကာကွယ်နိုင်စေရန်။`
  ]


  para03mm : string[] = [
    `စစ်မြေပြင်တွင် ထိခိုက်ဒဏ်ရာရရှိသူများကို အထိခိုက်အကျဆုံးနည်းအောင် အရေးပေါ် အသက်ကယ်တက်စေရန်နှင့် ကျွမ်းကျင်စွာ ကယ်ထုတ်တတ်စေရန်သင်တန်းများပေးခြင်း။`,
    `အရေးပေါ်လူနာကိုအလျှင်မြန်ဆုံး ခွဲစိတ်ကုသမှုပေးနိုင်စေရန်။`,
    `သေစေလောက်သောဒဏ်ရာများတွင် အချိန်မှီခွဲစိတ်ခြင်းဖြင့်အသက်ဆုံးရှုးမှုများကိုလျော့ချနိုင်စေရန်။`,
    `စစ်အေးချိန်တွင် စစ်ရှောင်ပြည်သူနှင့်ဒေသခံများကို ခွဲစိတ်ကုသပေးနိုင်စေရန်။`
  ]

  para03mu : string[] = [
    `Emergency life saving & first aid trainings, Evacuation from battle fields to decrease the decrease the death rate and lessen the complications of the trauma.`,
    `Emergency response to red cases`,
    `Timely Surgical Intervention for deadly injured patients`,
    `Elective Surgical procedures for those who might needed.`
  ]

  para04 : string[] = [
    `Medical Movement After the military coup on 1st February 2021, the people in Myanmar expressed non-violent protests. Nevertheless, the military junta used brutal control measures and violent crack down upon non-violent protestors. Traumatized patients can’t receive proper medical treatments. Medical professionals, facilities and patients came under attack. Some died and some had to flee away. Starting from March 28th, we started on-ground First-aid and emergency trauma care training to the civilians and protesters in Yangon so that they could manage trauma people around them to some extent. Later, we continue trainings in Kyeik Hto/ Mon State, Kayin State, Kayah/Karenni State and trained up to 1,277 people. 1. First-aid training and first-aid kits supply to 2002 people. 2. Medic training and medic backpack supply is 227. 3. Trauma refresher courses for doctor & nurses and supplementation of medical equipments to 20 people from the help of donors.`,
    `ဖေဖော်ဝါရီ ၁ ရက်နေ့အာဏာသိမ်းပြီးနောက် ထိုအချင်းအရာကိုဆန့်ကျင်သောအားဖြင့် ပြည်သူများအားလုံးငြိမ်းချမ်းစွာဆန္ဒထုတ်ဖော်ခဲ့ကြသော်လည်း စစ်ကောင်စီဘက်မှ အကြမ်းဖက်နှိမ်နှင်းခြင်းများသာဖြစ်ပွားခဲ့သည်။ ပစ်ခတ်မှုကြောင့်ထိခိုက်ဒဏ်ရာရသူများမှာ ဆေးကုသခွင့်မရရှိကြသကဲ့သို လူနာများကို ဆေးကုသပေးရန်ကြိုးစားသော ဆရာဝန်သူနာပြု၊ ကျန်းမာရေးဝန်ထမ်းများ၊ လူနာတင်ယာဉ်တိုမှာ ရိုက်နှက်ဖမ်းဆီးခံရသည်။ အချိုမှာထွက်ပြေးတိမ်းရှောင်ကြရသည်။ ဆေးကုသခွင့်မရ၍ ဒဏ်ရာရသူများသေဆုံးခဲ့ကြရသည်။ မတ်လ ၂၈ မှစ၍ မြေပြင်တွင်ရှိသူများနှင့်ချိတ်ကာ ထိခိုက်ဒဏ်ရာအရေးပေါ်အသက်ကယ်သင်တန်းများကို ရန်ကုန်တိုင်းတွင် စတင်ပေးဖြစ်ခဲ့သည်။ ထိုနောက်တွင် ကျိုက်ထို၊ ကရင်ပြည်နယ်၊ ကယား/ကရင်နီပြည်နယ် တိုတွင် အရေးပေါ်အသက်ကယ်သင်တန်းပေးခြင်း၊ ပြည်သူ့ကာကွယ်ရေးတပ်များအတွက် အရေးပေါ်စစ်မြေပြင်အသက်ကယ်သင်တန်းများပေးခဲ့သည်မှာ စုစုပေါင်းမှာ (၁,၂၇၇) ယောက် ရှိပြီဖြစ်သည်။ အရေးပေါ်အသက်ကယ် သင်တန်းပေးခြင်း နှင့် First aid kits ထောက်ပံ့ခြင်း (၁၀၀၂) ယောက်၊ ဆေးတပ်သင်တန်းပေးခြင်းနှင့် ဆေးအိတ်များပေးလှူခြင်းမှာ (၂၂၇) ယောက်၊ ဆရာဝန်သူနာပြုတိုအတွက် ထိခိုက်ဒဏ်ရာကုသခြင်းဆိုင်ရာ ပြန်လည်လေ့ကျင့်ခြင်းသင်တန်းနှင့် လိုအပ်သောဆေးပစ္စည်းများထောက်ပံ့ခြင်းမှာ အယောက် (၂၀) ရှိပြီဖြစ်သည်။
  `]

  para05 : string[] = [
    `We mainly focus on first-aid and medic trainings for those who were going to the front line previously. Later, most of the people come to have knowledge that emergency rescue training is vital though they weren't much interested in it at first. Number of the trainers, doctors and nurses for first-aid training has been increasing and people are becoming more interested with better learning abilities. Systematic patient transport systems are found as well. But, some people can't reach to the hospital and they were dragged by the hands of death because of far distance from the incident place to hospital, prolonged duration of evacuation from the battle fields and severity of the trauma. Number of untimely death is unknown. Thus, We, forward surgical team/ mobile surgical team, tried to fill the blank by doing resuscitations and timely surgical intervention hoping to rescue more people and safe others life starting from 1st January, 2022`,
    `ယခင်က ရှေ့တန်းစစ်မြေပြင် (Role 1) ကဏ္ဍဦးစားပေး လုပ်ကိုင်ခဲ့သည်။ အရေးပေါ်အသက်ကယ်ခြင်းလုပ်ငန်းများမှာ အရေးပါအရာရောက်ပြီး မရှိမဖြစ်လိုအပ်ကြောင်းသိရှိလာကြပြီဖြစ်သည်။ ဒေသခံပြည်သူများနှင့်ရဲဘော်များမှာ လေ့လာသင်ယူမှုအားကောင်းလာသလို သင်တန်းပိုချသောဆရာဆရာမများလည်း ယခင်ထက်ပိုမိုများလာသည်ကိုတွေ့ရှိရသည်။ လူနာကိုအသက်ဆွဲဆန့်မှုနှင့် ယခင်ထက်ပိုမိုစနစ်ကျသော လူနာလွှပြောင်းခြင်းများကိုတွေ့ရှိလာရသည်။ သိုသော် နောက်တန်းဆေးရုံ (Role 3) သိုပိုဆောင်စဉ် လမ်းခရီးအကွာအဝေး၊ အခက်အခဲနှင့် တိုက်ပွဲမှကယ်ထုတ်စဉ်အချိန်ကြာမြင့်သွားခြင်းနှင့် ဒဏ်ရာပြင်းထန်မှု စသောအချက်တိုကြောင့် ဆေးရုံထိမရောက်ပဲ အသက်ဆုံးရှုးမှုများကိုတွေ့ရသည်။ ထိုRole 2 ကဏ္ဍကွက်လပ်ကိုဖြည့်၍ အချိန်ဆွဲဆန့်အသက်ကယ်ခြင်း (Resuscitation & timely surgical intervention) ပြုလုပ်ရန်ကြိုးပန်းခဲ့ကြခြင်းဖြစ်သည်။ ထိုကြောင့် Forward/ Mobile Surgical team ရွေ့လျားခွဲခန်းလုပ်ငန်းများကို 1st Jan, 2022 မှစတင်၍ လုပ်ဆောင်ခဲ့ကြပါသည်။`
  ]

 
  ngOnInit(): void {
    this.languageService.subject.subscribe((res : any) => this.change_lan(res));
  }

  change_lan(lan : any) : void {
    this.language = lan;
  }

}
