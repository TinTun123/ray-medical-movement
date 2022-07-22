import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-surgical-team',
  templateUrl: './surgical-team.component.html',
  styleUrls: ['./surgical-team.component.scss'],
  providers : [NgbCarouselConfig]
})
export class SurgicalTeamComponent implements OnInit {

  constructor(private languageService : LanguageService, config : NgbCarouselConfig) {  
    config.interval = 3000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = true;
   }

  language : string = 'mu';
  para01 : string[] = [
    `After being repeated attacks to surgical units, moving things here and there and modification of subcentre clinics and native houses into operation theatre became difficult. We tried to build OT in a place near front line but have to leave when the location was known and targetedly attacked. Feeling of insecureness made health care workers unsafe and moved to the places where the motar shellings are unreachable. But, thoses places are far enough from the incident places about 1-2 hour drive and some even 3-4 hr drive. Considering the time of evacuation from battle field as 1 hr, life threatening injured patients are unable to get to the hospital and some even died on the way to hospital. Mobile surgical unit become the only solution for timely surgical interventions and save lives`,
    `ခွဲစိတ်ကုသနိုင် တဲ့ ခွဲခန်းနေရာဌာနတွေကိုလေယာဥ်၊လက်နက်ကြီး စသည်တိုဖြင့် ခနခန အတိုက်ခိုက်ခံရပြီးနောက်မှာ  ဆေးပစွည်းများ၊ဆေးခန်းများ ဟာ တစ်နေရာမှ နောက်ထပ် လုံခြုံနိုင်တဲ့နေရာတွေကို ပြောင်းရွေ့ခဲ့ကြရသည် ။ တိုက်ပွဲနှင့် အနီးအနား မှာ ခွဲခန်းတစ်ခုကို လုပ်ဖိုကြိုးစားပေမယ့်လည်း မ ကြာခနဆိုသလိုနေရာပေါက်ပြီး တိုက်ခိုက် ခံလာရတဲ့အခါမှာ   ရှေ့တန်း နေရာတွေကို စွန့်ခွာခဲ့ကြရတယ်။sub center ဆေးခန်းတွေ၊ ပြည်သူ့အိုးအိမ်တွေကိုအသုံးပြု ဖိုလည်းရွာသူ၊ရွာသားတွေရဲ့လုံခြုံရေးကို ငဲ့ကွက်သောအားဖြင့် ခွဲခန်းနေရာရရှိဖို ခက်ခဲလာခဲ့တယ်။ကျန်းမာရေး ဝန်ထမ်းတွေမှာ စိတ်မလုံခြုံမူတွေဖြစ်လာတဲ့အခါ လက်နက်ကြီးကျတဲ့နေရာတွေနဲ့ ဝေးတဲ့ နေရာတွေကို ရောက်သွားစေခဲ့တယ် ။ ဆေးရုံ၊ဆေးခန်းတွေကို ပြန်လည်  စတင်နိုင်ခဲ့ပေမယ့်  ဒဏ်ရာရရှိတဲ့ရဲဘော်တွေကို ပိုဆောင်တဲ့အခါ  တိုက်ပွဲဖြစ်ပွားရာနေရာမှ ၁ နာရီ ၂နာရီလောက်သွားရတယ်။တချိုနေရာတွေဆို ၃ ၄နာရီလောက်ထိ သွားရတာမျိူးတွေထိရှိပါတယ်။တိုက်ပွဲကနေ ကယ်ထုတ်တဲ့အချိန်ကလည်း ခန့်မှန်းခြေ ၁နာရီလောက်ကြာမြင့် နိုင်တာကြောင့် အသက်အန္တာရယ် စိုးရိမ်ရတဲ့လူနာတွေဟာ ဆေးရုံ အထိ မရောက်နိုင်ခဲ့ကြဘူး။ဒဏ်ရာပြင်းထန်တဲ့ရဲဘော်တချိုကတော့ဆေးရုံဆေးခန်းသွားရာ လမ်းပေါ်မှာ သေဆုံးခဲ့ ကြတယ်။ဒါကြောင့်ရွေ့လျားခွဲခန်းနဲ့  ခွဲစိတ်ကုသရေးအဖွဲ ကအချိန်မှီခွဲစိတ်ပြီး အသက်ကယ်နိုင်ဖိုအတွက် တစ်ခုတည်းသော အဖြေ ဖြစ်လာခဲ့တယ်။`
  ]

  para02 : string[] = [
    `On 30th December 2022 of Loikaw Milone battle, we chose a hospital named Nanmelkhone Hospital which is the closest to the battlefield so that we could save and help as far as we can. In that hospital we operated 24 cases during 2 weeks. Then, to avoid shelling of motors and air strike, doctors and nurses have to flee to a safer place.`,
    `၃၀.၁၂.၂၀၂၁ မှာ ဒီမောဆိုးရဲစခန်းကို ပြည်သူ့ကာကွယ်ရေးတပ်တွေ တက်ပစ်သည်။ ထိုနောက် လွိင်ကော်မိုင်းလုံးမှာ မြိုပြစစ်ဆင်ရေး ကိုဖန်တီးရင်းတိုက်ပွဲဖြစ်ခဲ့သည်။ ထိုအချိန်မှစ၍ ရှေ့တန်းနဲ့အနီးဆုံးမှာရှိတဲ့ ဆေးရုံကိုရွေးချယ်ပြီး ရောက်လာသမျှ ထိခိုက်ဒဏ်ရာရ လူနာတွေကိုအကောင်းဆုံး အသက်ကယ်မယ်ဆိုတဲ့ ခံယူချက်ဖြင့် နန်းမယ်ခုံဆေးရုံဆေးအဖွဲနဲ့ပေါင်းပြီး ခွဲစိတ်ကုသမူတွေပြုလုပ်ခဲ့ကြသည်။ (၂)ပါတ်ကာလအတွင်းလူနာ ၂၄ ယောက်ကုပေးခဲ့သည်။ နောက်ပိုင်းတွင် ဆေးရုံအနီးအနားကို လက်နက်ကြီး၊ လေယာဥ်နဲ့ ပစ်ခံရတာတွေကြောင့် ဆရာဝန်၊ ဆရာမတွေရဲ့ လုံခြုံရေးအရ တခြားတစ်နေရာသို ပြောင်း ရွေ့ခဲ့ရသည်။`
  ]

  para03 : string[] = [
    `On 16th February 2022, we modified a sub-centre clinic in Dawbuku into operation theatre where we made resuscitation and operation during Mobye battle. But, we have to move again due to the danger of repeated  air strike.`,
    ` မိုးဗြဲတွင် စကစဘက်မှ စစ်ကြောင်းထိုးသဖြင့် ဖေဖော်ဝါရီလ ၁၆ ရက်နေ့မှစပြီး မိုးဗြဲတိုက်ပွဲစခဲ့သည်။  သာယပ်၊ ဒေါလျားလီ၊ ဒေါဘူးကူး စသောရွာများတွင် ခွဲစိတ်ခန်းတစ်ခုကို ပြင်ဆင်ခဲ့ကြပါတယ်။ အသက်ဆွဲဆန့် Resuscitations လုပ်ပေးခဲ့သည်။ စကစမှ လက်နက်ကြီး၊ လေယာဉ်အလွန်အကျွံသုံး၍ စစ်ကြောင်းဇွတ်တရွတ်ထိုးသောကြောင့် တောက်လျောက်ဆုတ်ခွါပေးခဲ့ရသည်။`
  ]

  para04 : string[] = [
    ` "A house in Daw-Hlyar-Li (where we gave treatment in joint with KNDFB06 medical team) was burnt down by airstrike."`,
    `တပ်ရင်း ၆ ဆေးအဖွဲနှင့်ပေါင်း၍ ဆေးကုပေးခဲ့သော ဒေါလျားလီရှိနေအိမ် လေယာဉ်ဖြင့်ပစ်ခံရသဖြင့် လောင်ပြာကျသွားစဉ်။`
  ]

  para05 : string[] = [
    `Thereafter, we tried to modify the sub-centre clinic into operation theatre again in another villages. But, most of the rural people daren’t accept because of the fear in them. Thus, we tried to make mobile tent-type operation theatre which is not that very far from the battle field because we need to expect the transportation time of less than 1 hour to save the red (emergency) cases.`,
    `နောက်ပိုင်းခွဲခန်းဖြစ်ဖိုအတွက် ကျန်းမာရေးဌာနခွဲ အသေးလေးတွေကို ပြန်လည်ပြင်ဆင်ပြီး ခွဲစိတ်ရန်ကြိုးစားသော်လည်းဆေးကုသတဲ့နေရာတွေကို လက်နက်ကြီးထုတာ၊ လေယာဥ်နဲ့ပစ်တာမျိုးတွေ မကြာခဏဆိုသလိုရှိလာသဖြင့် ရွာအများစုမှာ ကျန်းမာရေးဌာနခွဲ (sub center) တွေမှာ ဆေးကုသဖို လက်မခံရဲကြပေ။`
  ]

  para06 : string[] = [
    `"Doctor, nurses and patients running away due to motor shelling during surgical care  in Daw-Ngan-Khar"`,
    `ဆေးကုသပေးနေစဥ်လက်နက်ကြီးကျ၍ဆရာဝန်၊ ဆရာမ၊ လူနာများထွက်ပြေးနေစဥ်`
  ]

  para07 : string[] = [
    `Before our dreams were come true with low budget and transportation blockages from the military junta, we arranged a house in yellow zone where we could make life-saving surgical interventions for deadly injured patients. We gave rapid surgical airway of the neck injury patients, on-ground chest tube insertion to deadly chest injury patient whose oxygen saturation is undetectable due to haemopneumo thorax. No loss of patient on our hands and all of them get complete recovery after discharge form hospital but sadly is amputated patients. They get their lives back but not their limbs.`,
    `Mobile Tent Type တဲပုံစံ ပြင်ဆင်နေတဲ့အတောအတွင်းမှာပဲ တိုက်ပွဲပြင်းထန်နေတာကြောင့် ရှေ့တန်း (yellow zone) ထိ လိုက်ပါပြီး ဆေးကုသမူ ပေးခဲ့ပါသည်။ 
    ဒေါတော်ကူး၊ ဒေါငံခါး၊ အိုခူးရီ စတဲ့ တိုက်ပွဲဖြစ်တဲ့ နေရာတွေမှာ လိုက်ပါပြီး ထိခိုက်ဒဏ်ရာ လူနာတွေကို ဆေးကုသမူပေးခဲ့ပါသည်။ yellow zone မှာပဲ တွေ့ရာ အိမ်တစ်လုံးထဲမှာ ဝင်ပြီးဆေးကုသဖို နေရာပြင်ဆင်ဖန်တီးခဲ့ကြတယ်။ လေပြွန်ထိတဲ့လူနာတွေ ကိုအသက်ရူပိုက်ထည့်တာ၊ရင်ဘတ်ကျည်ထိတဲ့ လူနာတွေကို  ရင်ဘတ်ထဲ ပိုက်ထည့်တာ စတာတွေကို လုပ်ပေးခဲ့သည်။ ဒေါ့ငံခါးမှာဆေးကုတဲ့နေ့က လက်နက်ကြီးထိတဲ့လူနာ ၄ယောက်ကျော်ရောက်လာပြီး  ဆေးကုနေတဲ့အိမ်ပေါ်တည့်တည့် လက်နက်ကြီးကျတယ် ။ ၂ယောက်ထပ်ထိတယ်။ အထိအခိုက်များသော နေ့များလည်းကြုံတွေ့ခဲ့ကြရပါသည်။`
  ]

  para08mu : string[] = [
    `Emergency response to red cases`,
    `Timely Surgical Intervention for deadly injured patients`,
    `Elective Surgical procedures for those who might needed`
  ]

  para08mm : string[] = [
    `အရေးပေါ်လူနာကိုအလျှင်မြန်ဆုံး ခွဲစိတ်ကုသမှုပေးနိုင်စေရန်။`,
    `သေစေလောက်သောဒဏ်ရာများတွင် အချိန်မှီခွဲစိတ်ခြင်းဖြင့်အသက်ဆုံးရှုးမှုများကိုလျော့ချနိုင်စေရန်။`,
    `စစ်အေးချိန်တွင် စစ်ရှောင်ပြည်သူနှင့်ဒေသခံများကို ခွဲစိတ်ကုသပေးနိုင်စေရန်။`
  ]

  h1 : string[] = [
    `Mobile / Forward Surgical team`,
    `ရွေ့လျားခွဲစိတ်ကုသရေးအဖွဲ`
  ]

  h2 : string[] = [
    `Experiences of Forward Surgical Team`,
    `တိုက်ပွဲများအတွင်းအတွေ့အကြုံ`
  ]

  para09 : string[] = [
    `"On ground airway intervention for neck injury patient in Dó-Ngan-Khă"`,
    `"လည်ပင်းထိခိုက်သောလူနာအား အရေးပေါ်အသက်ကယ်စဥ် (ဒေါ့ငံခါး)"`
  ]


  para10 : string[] = [
    `"Intra operation for deadly abdominal injured patient"`,
    `"သေနိုင်လောက်သော ဝမ်းဗိုက်ဒဏ်ရာလူနာကို ဆရာဝန်နှစ်ဦးပေါင်း၍ ခွဲစိတ်နေစဥ်"`
  ]

  imgcont : string [] = [
    `Intra operation for neck injured patient`,
    `လည်ပင်းထိသောလူနာအား ခွဲစိတ်ပေးနေစဥ်`
  ]

  imgcont02 : string[] = [
    `Interior design of tent-type operation theatre`,
    `တဲဖြင့်ပြုလုပ်သောခွဲခန်းအတွင်းဘက်မြင်ကွင်း`
  ]

  imgcont03 : string[] = [
    `Night time of a drug stock as part of operation theatre in the jungle`,
    `ညဘက်ခွဲခန်းအပြီး တောတွင်းခွဲခန်းရှိဆေးစတိုမြင်ကွင်း`
  ]

  imgcont04 : string[] = [
    `Pre-operative preparation for surgical case`,
    `ခွဲစိတ်ရန်ပစ္စည်းများပြင်ဆင်နေစဉ်`
  ]

  imgcont05 : string [] = [
    `During operation for amputated patiend due to land mine injury`,
    `မိုင်းနင်းမိ၍ခြေထောက်ပြတ်သောလူနာအားခွဲစိတ်ပေးနေစဉ်`
  ]

  imgcont06 : string [] = [
    `Minor operation for Lipoma excision`,
    `အဆီကျိတ်လူနာအား အသေးစားခွဲစိတ်မှုပြုလုပ်နေစဉ်`
  ]

  imgcont07 : string [] = [
    `Changing room & hand washing basin inside the mobile car-type operation theatre`,
    `ကားဖြင့်ပြုလုပ်သောရွေ့လျားခွဲခန်း အပြင်ရှိ အဝတ်လဲခန်းနှင့် လက်ဆေးဘေစင်`
  ]

  imgcont08 : string[] = [
    `Mobile car-type operation theatre interior design`,
    `ကားဖြင့်ပြုလုပ်သောရွေ့လျားခွဲခန်းအတွင်းဘက်မြင်ကွင်း`
  ]

  images = ['car-type01', 'car-type02', 'tent-type02'].map(n => `../../assets/image/${n}.jpg`);


  ngOnInit(): void {
    this.languageService.subject.subscribe((res : any) => this.change_lan(res));
  }

  change_lan(lan : any) {
    this.language = lan;
  }

}
