/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { 
  Snowflake, 
  Globe, 
  Sun, 
  Moon, 
  Phone, 
  MessageCircle, 
  Sparkles, 
  CheckCircle2, 
  Wrench, 
  ShieldCheck, 
  Clock, 
  ArrowLeft, 
  ArrowRight,
  MapPin,
  Check,
  AlertTriangle,
  Flame,
  HelpCircle,
  Briefcase,
  ChevronDown
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// @ts-ignore
import acMechanicHero from "./assets/images/ac_mechanic_hero_1780322172556.png";
// @ts-ignore
import cleanHvacTechnician from "./assets/images/ac_mechanic_hero_1780322172556.png";
// @ts-ignore
import acMechanicCleaning from "./assets/images/ac_mechanic_cleaning_1780322196560.png";
// @ts-ignore
import acMechanicOutdoor from "./assets/images/ac_mechanic_outdoor_1780322216009.png";
// @ts-ignore
import acMechanicEmergency from "./assets/images/ac_mechanic_emergency_1780322238430.png";
// @ts-ignore
import acMechanicSharjah from "./assets/images/ac_cooling_breeze_1780312338424.png";
// @ts-ignore
import acMechanicInstall from "./assets/images/ac_mechanic_install_1780322309377.png";

// Declaring maps as empty strings to resolve build errors (we render styled CSS and vectors instead)
const mapDubai = "";
const mapSharjah = "";
const mapAjman = "";
const mapUaq = "";
const mapFujairah = "";
const mapRak = "";

// Direct premium male-only technician working with AC images (no females or abstract ACs)
const acTechnicianWorking = acMechanicHero;
const acCleaningService = acMechanicCleaning;
const outdoorAcRepair = acMechanicOutdoor;
const acInstallation = acMechanicInstall;
const acEmergencyVan = acMechanicEmergency;
const acCoolingBreeze = acMechanicSharjah;

const blogArticles = [
  {
    titleAr: "كيف تعرف إن مكيفك يحتاج صيانة؟ دليل النور التفصيلي",
    titleEn: "How to Know If Your AC Needs Service: Al-Nour Full Guide",
    image: acCleaningService,
    introAr: "في أجواء دولة الإمارات العربية المتحدة التي تتصف بالحرارة الشديدة والرطوبة العالية طوال شهور الصيف الطويلة، تصبح أجهزة التكييف صمام الأمان الوحيد لراحة عائلتك واستمرارية عمل أجهزتك. إن إهمال الصيانة البسيطة أو تجاهل العلامات التحذيرية الخفيفة لا يؤدي فقط إلى تلف الضاغط (الكومبريسور الخارجي) الذي يمثل قلب التكييف النابض، بل يؤدي أيضاً إلى تكاليف باهظة وخطر دائم على صحة الجهاز التنفسي لعائلتك. في شركة النور، نقدم لك دليلاً فنياً شاملاً ومفصلاً للتعرف على أبرز العلامات التي تدل على حاجة جهازك الماسة للصيانة الفنية الفورية وعناية المتخصصين قبل وقوع الكوارث المكلفة.",
    introEn: "In the extreme high-temperature and high-humidity climate of the UAE, air conditioning system operations represent the absolute lifeline for residential luxury and commercial stability. Ignoring subtle warning sighs or postponing scheduled check-ups not only causes total mechanical breakdown of the outdoor compressor (the heart of the unit), but also spikes monthly utility bills and triggers severe respiratory allergies. Our certified HVAC engineering team at Al-Nour has compiled this comprehensive technical guide to help you identify the precise signs indicating your AC requires instant expert intervention before experiencing costly shutdowns.",
    sections: [
      {
        headingAr: "1. تراجع ملحوظ في قوة البرودة وتدفق الهواء الساخن أو الدافئ",
        headingEn: "1. Noticeable Drop in Frosted Airflow & Warm Air Emissions",
        textAr: "إذا لُوحظ أن مكيف الهواء يستغرق ساعات طويلة جداً لتعديل درجة حرارة الغرفة أو يخرج هواء دافئاً رطباً، فهناك عطل ميكانيكي حتمي. يعود هذا في الأغلب إلى نقص حاد في غاز الفريون (R22 أو R410A) نتيجة لوجود تسريب دقيق مخفي في الأنابيب النحاسية الرابطة، أو تراكم كلي للأتربة والغبار على زعانف كويلات المبخر (Evaporator Coils) الداخلية مما يمنع انتقال الغاز وتبادل الحرارة بكفاءة. استدعاء فنيي النور فوراً يحول دون التلف الكلي للضاغط الذي تزيد قيمة تغييره عن نصف ثمن المكيف الجديد، حيث نقوم بفحص الضغوط وإصلاح التسريبات وشحن الغاز بالنسب الدقيقة.",
        textEn: "If your AC runs continuously but struggles to decrease indoor temperatures or discharges warm, humid air, a mechanical breakdown is imminent. Mostly, this points to a significant refrigerant leak (R22 or R410A) along copper lines, or complete blockage of internal evaporator coils by compact dust blankets restricting optimal heat exchange. Calling Al-Nour technicians immediately prevents total compressor burnout (which costs more than 50% of a brand-new system), as we inspect gas pressures, weld leaks, and perform precise refrigerant recharging."
      },
      {
        headingAr: "2. تساقط وتكثيف المياه المستمر من الهيكل والخارج من الوحدة الداخلية",
        headingEn: "2. Continuous Water Dripping or Condensation leakage from the Indoor Unit",
        textAr: "يعد تساقط المياه داخل الفلل أو الشقق من الجدران الخلفية للمكيف إنذاراً واضحاً بالانسداد. عندما يقوم المكيف بسحب الحرارة وتبريد الرطوبة، يتكثف بخار الماء داخل بانيو الصرف الداخلي ويوجه للخارج عبر أنابيب لتفريغه. عند انسداد مجري الصرف بفعل تجمع خيوط العفن الفطري الداكن والأتربة المستقرة، ترتجع المياه للخلف لتسقط على الجدران، مما يسبب تخريب دهانات الجبس ونمو بقع العفن الأسود السامة التي تلوث هواء التنفس، وقد تتساقط المياه على التوصيلات الكهربائية للمكيف فتحترق لوحة التحكم الرئيسية (PCB Board) فوراً. نقوم بتسليك مجاري الصرف بضغط المياه العالي والمواد المطهرة لحل المشكلة بشكل نهائي.",
        textEn: "Water leakage inside your house from the rear casing of the indoor unit is an absolute calling card of a drainage crisis. During cooling sessions, moisture extracted from the air condenses on the cold indoor coils and drains away. When the condensate drain line gets clogged with bacterial slime and compacted sand, water backs up and overflows, destroying gypsum decorations, peeling wall paint, rearing toxic mold, and risking short-circuiting the main electronic PCB control board. We use high-pressure hydraulic purge units to clear drain lanes and apply active disinfectants to keep water flowing outwards."
      },
      {
        headingAr: "3. صدور أصوات غريبة كالصفير، الطقطقة، الاهتزاز أو طحن القطع الدوارة",
        headingEn: "3. Unfamiliar Mechanical Noises: Squealing, Grinding, or Loud Vibrations",
        textAr: "المكيف السليم يعمل بمعدل ضوضاء منخفض وشبه صامت. إذا بدأت تسمع صوت طقطقة متكررة، فهذا يدل على عائق في مروحة توزيع الهواء أو شفرة مكسورة. وصوت الصفير الحاد يقترن بخلل في ضغوط الغاز أو انسداد في فلاتر الهواء وصمام التمدد الحراري. أما أصوات الطحن المعدني العالية والخشخشة، فهي إشارة قطعية على جفاف الشحم أو تلف رولمان البلي (Bearings) في ماتور المروحة أو تآكل الأجزاء الميكانيكية للكومبريسور الخارجي. إن إهمال هذه الأصوات يحول المشكلة الفنية البسيطة (التي تتطلب فقط تشحيماً أو إحكام مسامير) إلى دمار كامل للقطع الدوارة يصعب حله بدون تكاليف كبرى.",
        textEn: "An air conditioning system is designed to operate within balanced, whisper-quiet acoustic limits. Continuous rattling represents loose fan blades, fan motor imbalance or foreign objects inside the blower. Piercing squeals generally point to pressure anomalies within the cooling cycle, clogged filters, or expansion valve faults. Harsh metal-on-metal grinding noises are absolute alerts that motor bearings have run completely dry or the compressor rotor is degrading. Ignoring these cues elevates a simple maintenance task (like bearing lubrication or tightening) to catastrophic mechanical friction that ruins major motor shafts."
      },
      {
        headingAr: "4. ارتفاع مفاجئ بشكل مبالغ فيه في قيمة فاتورة استهلاك الكهرباء الشهرية",
        headingEn: "4. Unexpected and Exponential Spikes in Your Monthly Electricity Bills",
        textAr: "الفاتورة الشهرية هي المرآة المباشرة لكفاءة تشغيل أجهزتك. عندما يعمل التكييف وهو متسخ أو ذو كفاءة متراجعة، يبذل الكومبريسور جهداً مضاعفاً بنسبة تفوق 35% ويبدأ بسحب تيار كهربائي كبير (Amperage) ليعمل فترات أطول لتعويض الفروقات الحرارية والوصول لدرجة الحرارة المطلوبة المسجلة في الثرموستات. هذا الجهد الزائد يترجم فوراً في ارتفاع مهول في فاتورة الكهرباء. من خلال إجراء غسيل احترافي شامل لملفات التكثيف والمبخرات بضغط المياه والتعقيم, يقل مجهود المحرك ومقاومة تبادل الحرارة، ليعود المكيف لكفاءته الأصلية وينخفض استهلاك الطاقة الكهربية بمعدل 20% إلى 25% فوراً وبشكل مستدام.",
        textEn: "Your electricity bill serves as a direct indicator of your HVAC configuration's thermal degradation. When an AC functions with dirty coils, the compressor works 35% harder, drawing higher current and staying active for hours to fulfill thermostat thresholds. This excess energy waste immediately inflates your bills. Professional high-pressure coil washing of both indoor and outdoor units clears the path, letting the refrigerant reject heat smoothly, reducing electricity consumption by 20% to 25% instantly."
      }
    ],
    ctaAr: "هل مكيفك يظهر عليه أي من هذه الأعراض؟ احجز كشفك المجاني والكامل الآن لنرسل لك فنيي شركة النور لتصليح التكييفات وتحديد الخلل بدقة ممتازة وبدون أي التزامات مسبقة!",
    ctaEn: "Is your AC showing any of these warnings? Register for a 100% free comprehensive inspection today. Our certified Al-Nour technicians will diagnose your cooling system precisely with zero prior obligations!"
  },
  {
    titleAr: "الفرق بين أنظمة تكييف السبليت والمركزي والشباك: أيهما أفضل لبيتك؟",
    titleEn: "Comparing Split, Central, and Window ACs: Which Suits Your Space Best?",
    image: acCoolingBreeze,
    introAr: "اختيار نظام التكييف الملائم لعقاراتك في دولة الإمارات العربية المتحدة ليس قراراً عشوائياً، بل هو استثمار فني وثرموديناميكي يحدد مدى راحتك اليومية ونفقات طاقتك التشغيلية وتكاليف الصيانة السنوية لسنوات طويلة قادمة. لكل طراز ونظام معايير تصميمية متباينة، وفريق عمل مخصص، وبروتوكولات تركيب وصيانة خاصة به. لتسهيل المهمة عليك وتأمين استثمارك المالي، تستعرض شركة النور مقارنة تفصيلية دقيقة ومعمقة حول الفروق الجوهرية بين التكييف السبليت، التكييف المركزي، وتكييف الشباك لتحديد الخيار الأمثل لاحتياجاتك بدقة متناهية.",
    introEn: "Selecting the ideal HVAC system for your UAE property is a complex decision that scales your baseline comfort, hardware life expectancy, and energy savings for over a decade. Every cooling system configuration has its own specific thermodynamic design margins, duct layout requirements, and customized maintenance protocols. To secure your investment, our technical consultants at Al-Nour present an detailed comparison of Split Units, Central Ducted Systems, and Window ACs, highlighting the optimal use cases for each choice.",
    sections: [
      {
        headingAr: "1. مكيفات السبليت (Split Systems): التبريد الهادئ والمظهر الجميل للغرف والأجنحة",
        headingEn: "1. Split Unit ACs: Whisper-Quiet Operation & Sleek Visual Design for Rooms",
        textAr: "المكيف الأكثر مبيعاً واستخداماً في الشقق الفاخرة والغرف السكنية الحالية بالدولة. يتميز بفصل الدورة ميكانيكياً لجزئين: وحدة التبخير الداخلية الأنيقة التي تعلق على الجدار دون تشويه الديكور، والوحدة الخارجية التي تحتوي على الكومبريسور والضاغط وتثبت خارج جدران المبنى. هذا الفصل التام يقضي على الضوضاء المزعجة داخل الغرفة تماماً لضمان نوم عميق. كما أنه يتيح لك تحكماً مستقلاً رائعاً لدرجات الحرارة في كل غرفة على حدة بواسطة ريموت كنترول مخصص، ومستوى استهلاك ممتاز للطاقة الكهربية، لاسيما مع الموديلات الحديثة المزودة بتقنية عاكس التيار (Inverter) الموفر للكهرباء بنسبة 40%.",
        textEn: "The undisputed leader in residential apartments and individual rooms. Built upon a dual-component engineering layout: a sleek indoor evaporator unit suspended on the wall, and an outdoor compressor platform installed outside. This configuration completely isolates vibrations and loud operational hums from your living space, making it perfect for bedrooms. Split units support highly optimized independent zoning controls and yield maximum energy savings when paired with modern variable-speed Inverter compressors."
      },
      {
        headingAr: "2. التكييف المركزي المخفي (Central Ducted Systems): تبريد المساحات الضخمة بجمال ووقار",
        headingEn: "2. Central Ducted Systems: Concealed Luxury & Balanced Climate for Grand Spaces",
        textAr: "هو التكييف الأساسي لتبريد الفلل الكبيرة والمجمعات الإدارية والمحلات التجارية والمكاتب المفتوحة. يتميز بقدرة ضخ تبريدية عملاقة ومظهر خارجي مخفي بالكامل في السقف لا تظهر منه سوى فتحات خروج الهواء (Air Diffusers) المزخرفة التي تتكامل مع الأسقف الجبسية الحديثة. يقوم المكثف المركزي بضخ هواء بارد موزع بدقة بالغة وبضغط متوازٍ عبر مجاري صاج مغلف ومقاوم للصدأ ومعزول تماماً يسمى الدكت (Ducts). يحمي هذا النظام من التيارات المباشرة المتعبة ويضمن حرارة موحدة في أرجاء المبنى. يتطلب صيانة دورية سنوية هامة مثل تنظيف الدكت لضمان خلوه من حشرات الفراش والأتربة العالقة وهواء صحي بالكامل.",
        textEn: "The premium choice for expansive villas, commercial showrooms, corporate offices, and open floor plans. Engineered to deliver high-capacity cooling via concealed indoor air handlers. Cooled air is distributed through heavily insulated, galvanized iron duct networks hidden completely within gypsum ceilings, with only ornamental diffusers visible. This results in incredibly uniform room temperatures, eliminating cold spots and drafts. Central systems require professional annual duct cleanings to eradicate dust settling and bacterial colonies."
      },
      {
        headingAr: "3. مكيف الشباك الكلاسيكي (Window ACs): البساطة الاقتصادية، متانة التحمل وسرعة النقل",
        headingEn: "3. Classic Window Units: Budget-friendly and Exceptionally Sturdy",
        textAr: "الحل التقليدي المفضّل للأماكن المؤقتة، الملاحق الخارجية، السكنات الفرعية، والمطابخ. يجمع هذا المكيف كل مكونات التبريد والمبث والكومبريسور داخل وحدة وصندوق معدني واحد قوي وسهل الصنع والتركيب، حيث يتطلب فقط فتحة مربعة مجهزة في الجدار الخارجي ويتم تثبيته ببراكيت معدني بسيط. ميزته الكبرى تكلفتها المنخفضة عند الشراء وسهولة الصيانة المباشرة ونقله من مكان لآخر. لكنه يصدر صوتاً معدنياً وصخباً أعلى نسبياً من السبليت لوجود الكومبريسور داخل جدار الغرفة، ومعدل استهلاكه للطاقة أعلى مما يتطلب إحكام عزل الجوانب لمنع تسريب الهواء الحار للداخل.",
        textEn: "A robust, highly cost-effective cooling system commonly deployed in support staff quarters, kitchens, construction offices, and warehouses. Integrates all working refrigeration components inside a single steel chassis fitted directly into a pre-cut square wall aperture. The ultimate advantage lies in its low initial cost, straightforward mechanics, and easy relocation. However, they run significantly louder than split configurations as the compressor resides inside your living room boundary, requiring specialized side insulation seals to prevent hot air drafts."
      }
    ],
    ctaAr: "هل تبحث عن استشارة مجانية مع خبير تكييف معتمد وموثوق لتحديد نوع المكيف الأفضل وتوزيع الأحمال لبيتك أو عقارك؟ تواصل مع شركة النور الحين وسنرسل لك أفضل مستشار فني لتلقي النصائح مجاناً بالكامل!",
    ctaEn: "Looking for a certified HVAC assessment to determine the perfect cooling configuration and heat load calculations for your property? Direct your message to Al-Nour support now to request a 100% free expert on-site consultation!"
  },
  {
    titleAr: "لماذا يجب غسيل وتنظيف مكيفك كل 3 شهور كيميائياً بالضغط العالي؟",
    titleEn: "Why Your AC Requires Professional Coil Chemical Washing Every 3 Months",
    image: outdoorAcRepair,
    introAr: "في بيئة دولة الإمارات وما تتسم به من عواصف رملية ناعمة وأتربة دقيقة دائمة بالهواء، يعمل مكيف الهواء مثل رئة عملاقة ضخمة تقوم بسحب وتصفية آلاف الأمتار المكعبة من الهواء يومياً لتوفير درجة حرارة هانئة. بمرور الوقت وتراكم الأتربة والرمل الناعم، يختنق المكيف بالكامل وتتحول رطوبته الداخلية المظلمة إلى بيئة لتجمع البكتيريا الضارة التي تعوق تدفق الهواء. إن تنظيف الفلاتر العادية بالمنزل غير كافٍ إطلاقاً، بل يحتاج المكيف إلى غسيل مائي كيميائي عميق بالضغط العالي كل 3 شهور، وهو ما يمثل ركناً أساسياً لحماية أموالك وصحة عائلتك.",
    introEn: "In the dusty geography of the UAE characterized by fine desert sand and airborne particles, your air conditioner operates like a massive biological lung, filtering thousands of cubic meters of air daily inside your property. Over a period of several months, micro-sand settles under wet frames, suffocating the mechanical flow and converting the dark damp internal components into an active breeding ground for pathogens. Simply washing the mesh dust filter at home is not enough; your system requires detailed high-pressure chemical coil washing every 3 months. This is a critical technical chore to safeguard your budget and family health.",
    sections: [
      {
        headingAr: "1. تخفيض فوري ومباشر لفاتورة استهلاك الكهرباء بنسبة تصل إلى 25%",
        headingEn: "1. Instant and Verifiable Drop in Monthly Power Consumption by 25%",
        textAr: "تراكم طبقة لزجة من خليط الغبار والوبر يمثل عازلاً حديدياً يمنع كويلات التبريد من تبادل الحرارة مع هواء الغرفة. هذا يعني أن المكيف سيضطر لبذل جهد مضاعف والعمل لساعات طوال بدون توقف، مما يؤدي لسحب تيار قوي يرفع استهلاك الفاتورة. الغسيل الاحترافي بالضغط العالي يزيل الكلس والأوساخ من مسامات الفان والكويلات بنسبة 100%، مما يتيح تبريداً فائق السرعة ويقلل ساعات العمل للكومبريسور فتنخفض فاتورة استهلاك الكهرباء فوراً بمعدل 25% شهرياً.",
        textEn: "A thick layer of sand and lint acts as a severe thermal insulation blanket that coats heat-dissipation plates. Consequently, the cooling cycle is disrupted, dragging high current and forcing your compressor to work extra hours. Professional chemical jet washing breaks down consolidated salt and debris inside aluminum sheets, facilitating lightning-fast cooling, freeing the fan blades, and instantly cutting monthly energy consumption by 25%."
      },
      {
        headingAr: "2. تنفس هواء نقي معقم بالكامل وحماية أطفالك من الحساسية والربو",
        headingEn: "2. Breathe Pure Disinfected Air: Safeguarding Your Children from Asthma & Sinus",
        textAr: "الرطوبة الدائمة وتراكم الأتربة يخلقان المزرعة المثالية عالمياً لتوالد جراثيم الفطريات، بقع التعفن الداكن، وقراد الغبار المجهري. عند تشغيل المكيف وشم رائحة رطوبة أو روائح كريهة، فإن ملايين هذه الذرات السامة تندفع ليعاد توزيعها بالهواء وتستنشقها عائلتك، مما يسبب سيلان الأنوف المستمر، الربو الحاد، السعال الجاف، وحساسية العيون لدى الأطفال. نحن في شركة النور نقوم باستخدام مواد تعقيم صديقة للبيئة تقضي تماماً على 99.9% من الفيروسات والبكتيريا العالقة داخل المكيف لتستنشق هواءً نقياً كلياً.",
        textEn: "Continuous condensation inside the housing, mixed with organic dust particles, makes internal panels a hotbed for biological mold, dark fungi, and microscopic dust mites. Operating an unwashed conditioning unit blows these toxic spores into your rooms. Inhaling these bio-allergens triggers constant nasal irritation, sinus flares, dry coughs, and acute respiratory distress in children. Our technical team treats core surfaces with medical-grade, eco-friendly sanitizing solutions to eliminate 99.9% of bacteria."
      },
      {
        headingAr: "3. تجنب الأعطال الكارثية المفاجئة التي توقف التبريد وتخرب كرت التوصيل",
        headingEn: "3. Avoid Sudden Catastrophic Mechanical Failures & Protect Electronic Components",
        textAr: "يتجمع غبار المكيف المبلل في بانيو الصرف الداخلي مكوناً طيناً لزجاً يسد مجرى الصرف بمرور الوقت بشكل كامل، مما يجعل مياه التكثيف تفيض داخل المكيف وتتساقط لتخرب الأثاث ودهان الغرفة، أو لتسقط على اللوحات الإلكترونية الحساسة للمكيف (PCB Board) والأسلاك فيحترق كرت المكيف والكومبريسور تماماً وتنال أعطالاً مفاجئة في أوج حرارة الصيف. الغسيل الدوري كل 3 شهور بالضغط العالي يغسل الأنابيب ويفحص المكونات للتأكد من سلامتها لسنوات وعقود قادمة.",
        textEn: "Fine sand combined with condensed water forms a thick mud paste that clogs the condensate drip tray and drain conduits. When water backs up, it leaks out to stain furniture and ruin interior walls. More dangerously, it overlaps with sensitive internal electrical connections, instantly blowing the electronic PCB boards, shorting fan motors, or seizing compressor cylinders. Periodic quarterly high-pressure flushes keep drainage channels clear, preventing sudden failures and extending your AC's active lifespan."
      }
    ],
    ctaAr: "لا تترك هواء منزلك ملوثاً وفاتورتك مرتفعة! اطلب باقة غسيل وتعقيم المكيفات الشاملة بالضغط العالي من شركة النور اليوم واستمتع بهواء نقي وبارد بامتياز!",
    ctaEn: "Don't settle for dusty indoor air and inflated electricity bills! Register for Al-Nour comprehensive high-pressure deep chemical washing and disinfection bundle today to enjoy frosty, pure clean air."
  }
];

export default function App() {
  // Global States: Arabic language default & Dark mode status
  const [isArabic, setIsArabic] = useState<boolean>(true);
  const [isDark, setIsDark] = useState<boolean>(false);

  // Form State parameters
  const [name, setName] = useState<string>("");
  const [whatsapp, setWhatsapp] = useState<string>("");
  const [issue, setIssue] = useState<string>("");
  const [emirate, setEmirate] = useState<string>("");
  
  // Custom Success / Booking notification box
  const [showNotification, setShowNotification] = useState<boolean>(false);
  const [notificationMessage, setNotificationMessage] = useState<string>("");

  // Selected blog article index (for showing detailed modal info)
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);

  // Logo load status state
  const [logoLoaded, setLogoLoaded] = useState<boolean>(false);

  // Floating action buttons custom adaptive state parameters
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  const [desktopHovered, setDesktopHovered] = useState<boolean>(false);

  // Sync Language & layout direction
  useEffect(() => {
    const langCode = isArabic ? "ar" : "en";
    const dirType = isArabic ? "rtl" : "ltr";
    
    document.documentElement.setAttribute("lang", langCode);
    document.documentElement.setAttribute("dir", dirType);
    document.body.setAttribute("dir", dirType);

    // Synchronize default dropdown issues & emirates on language shift
    if (!issue) {
      setIssue(isArabic ? "مكيف ما يبرد" : "Poor Cooling");
    } else {
      // Map previous issue to new language if possible for convenience
      if (isArabic) {
        if (issue === "Poor Cooling") setIssue("مكيف ما يبرد");
        else if (issue === "Water Leak") setIssue("تسريب مياه");
        else if (issue === "Strange Noise") setIssue("صوت غريب");
        else if (issue === "Cleaning") setIssue("تنظيف");
        else if (issue === "Gas Refill") setIssue("شحن فريون");
        else if (issue === "New Installation") setIssue("تركيب جديد");
      } else {
        if (issue === "مكيف ما يبرد") setIssue("Poor Cooling");
        else if (issue === "تسريب مياه") setIssue("Water Leak");
        else if (issue === "صوت غريب") setIssue("Strange Noise");
        else if (issue === "تنظيف") setIssue("Cleaning");
        else if (issue === "شحن فريون") setIssue("Gas Refill");
        else if (issue === "تركيب جديد") setIssue("New Installation");
      }
    }

    if (!emirate) {
      setEmirate(isArabic ? "دبي" : "Dubai");
    } else {
      if (isArabic) {
        if (emirate === "Dubai") setEmirate("دبي");
        else if (emirate === "Sharjah") setEmirate("الشارقة");
        else if (emirate === "Ajman") setEmirate("عجمان");
        else if (emirate === "UAQ") setEmirate("أم القيوين");
        else if (emirate === "Fujairah") setEmirate("الفجيرة");
        else if (emirate === "RAK") setEmirate("رأس الخيمة");
        else if (emirate === "Abu Dhabi") setEmirate("أبوظبي");
      } else {
        if (emirate === "دبي") setEmirate("Dubai");
        else if (emirate === "الشارقة") setEmirate("Sharjah");
        else if (emirate === "عجمان") setEmirate("Ajman");
        else if (emirate === "أم القيوين") setEmirate("UAQ");
        else if (emirate === "الفجيرة") setEmirate("Fujairah");
        else if (emirate === "رأس الخيمة") setEmirate("RAK");
        else if (emirate === "أبوظبي") setEmirate("Abu Dhabi");
      }
    }

    // Secondary sync logic targeting any DOM components containing custom data attributes
    const elements = document.querySelectorAll("[data-ar][data-en]");
    elements.forEach((el) => {
       const arVal = el.getAttribute("data-ar");
       const enVal = el.getAttribute("data-en");
       if (arVal && enVal) {
         el.textContent = isArabic ? arVal : enVal;
       }
     });

  }, [isArabic]);

  // Handle device width detection for the adaptive action buttons
  useEffect(() => {
    const checkViewportMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkViewportMobile();
    window.addEventListener("resize", checkViewportMobile);
    return () => window.removeEventListener("resize", checkViewportMobile);
  }, []);

  // Set up the automatic expansion/collapse lifecycle for floating buttons
  useEffect(() => {
    setIsExpanded(true);
    
    // Initial collapse after 5 seconds
    const initialTimer = setTimeout(() => {
      setIsExpanded(false);
    }, 5000);

    let mobileInterval: any = null;

    if (isMobile) {
      // Auto-expand every 8 seconds for 2 seconds
      mobileInterval = setInterval(() => {
        setIsExpanded(true);
        setTimeout(() => {
          setIsExpanded(false);
        }, 2000);
      }, 8000);
    }

    return () => {
      clearTimeout(initialTimer);
      if (mobileInterval) clearInterval(mobileInterval);
    };
  }, [isMobile]);

  // Sync Global Theme Changes
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      document.body.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("dark");
    }
  }, [isDark]);

  // Primary Action Call & WhatsApp triggers
  const primaryPhone = "0505075707";
  const formattedPhoneInternational = "+971505075707";

  const triggerCall = () => {
    window.location.href = `tel:${primaryPhone}`;
  };

  const triggerGeneralWhatsApp = () => {
    const text = isArabic 
      ? "مرحباً شركة النور الفنية، أود الاستفسار عن كشف مجاني للتكييف وصيانة مكيف الهواء." 
      : "Hello Al-Nour Technical Services, I would like to schedule a free inspection and ask about AC repair.";
    window.open(`https://wa.me/971505075707?text=${encodeURIComponent(text)}`, "_blank");
  };

  // WhatsApp form submission redirect
  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !whatsapp) {
      alert(isArabic ? "الرجاء كمل الاسم ورقم الواتساب أولاً" : "Please fill in your name and WhatsApp number first");
      return;
    }

    // Build perfect Arabic or English WhatsApp dynamic dispatch text
    const textMessage = isArabic
      ? `*حجز كشف مجاني جديد - شركة النور*\n\n👤 *الاسم:* ${name}\n📱 *رقم الواتساب:* ${whatsapp}\n🔧 *المشكلة:* ${issue}\n📍 *الإمارة:* ${emirate}\n\nيرجى التواصل معي لتأكيد الموعد بأقرب وقت ممكن.`
      : `*New Free Inspection Request - Al-Nour*\n\n👤 *Name:* ${name}\n📱 *WhatsApp:* ${whatsapp}\n🔧 *Issue:* ${issue}\n📍 *Emirate:* ${emirate}\n\nPlease contact me to confirm the schedule as soon as possible.`;

    // Dynamic warning alert before deep redirect
    setNotificationMessage(isArabic 
      ? `جاري تحويلك إلى الواتساب لحجز موعد الكشف المجاني يا سيد ${name}...` 
      : `Redirecting to WhatsApp to book your free inspection, Mr. ${name}...`
    );
    setShowNotification(true);

    setTimeout(() => {
      window.open(`https://wa.me/971505075707?text=${encodeURIComponent(textMessage)}`, "_blank");
      setShowNotification(false);
      // Reset state fields partially
      setName("");
      setWhatsapp("");
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-app-bg text-app-text transition-all duration-300 selection:bg-app-blue selection:text-white pb-12 overflow-x-hidden">
      
      {/* 1. STICKY BLURRED HEADER WITH ALL ACTION MODES */}
      <header className="fixed top-0 left-0 right-0 z-50 h-[72px] md:h-[84px] border-b border-app-border bg-app-bg/80 backdrop-blur-xl flex items-center transition-all duration-300 shadow-sm">
        <div className="container mx-auto px-3 sm:px-4 md:px-8 flex items-center justify-between gap-1">
          
          {/* Logo Brand with text + Snowflake */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-1.5 sm:gap-2.5 cursor-pointer group shrink-0"
          >
            {/* Logo Icon */}
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-gradient-to-tr from-app-blue to-[#00A3FF] flex items-center justify-center text-white shadow-md shadow-app-blue/20 transition-transform group-hover:scale-105 active:scale-95 shrink-0">
              <Snowflake className="w-5 h-5 sm:w-6 sm:h-6 text-white animate-pulse" />
            </div>
            
            {/* Logo Text */}
            <div className="flex flex-col select-none text-start">
              <h1 className="font-black text-[11px] sm:text-sm md:text-base tracking-tight text-app-text leading-tight transition-colors group-hover:text-app-blue">
                {isArabic ? "شركة النور للخدمات الفنية" : "Al-Nour Technical Services"}
              </h1>
              <p className="text-[8px] sm:text-[10px] md:text-xs text-slate-400 font-bold leading-none">
                {isArabic ? "الريادة في التكييف" : "AC & Cooling Excellence"}
              </p>
            </div>
          </div>

          {/* Action Header Menu */}
          <div className="flex items-center gap-1 sm:gap-2 md:gap-3 shrink-0">
            
            {/* Language Switch Button */}
            <button 
              onClick={() => setIsArabic(!isArabic)}
              className="flex items-center gap-1 px-2 py-1.5 md:px-3 md:py-2 rounded-lg border border-app-border hover:border-app-blue text-app-text bg-app-card-bg text-xs font-bold transition-all active:scale-95 cursor-pointer shadow-sm hover:shadow"
              title={isArabic ? "Switch to English" : "التحويل للغة العربية"}
            >
              <Globe className="w-3.5 h-3.5 text-app-blue" />
              <span className="text-[10px] sm:text-xs">{isArabic ? "EN" : "العربية"}</span>
            </button>

            {/* Separate Theme Trigger Selector */}
            <button 
              onClick={() => setIsDark(!isDark)}
              className="flex items-center justify-center w-8 h-8 sm:w-auto sm:px-2.5 sm:py-1.5 md:px-3 md:py-2 rounded-lg border border-app-border hover:border-app-blue text-app-text bg-app-card-bg text-xs font-bold transition-all active:scale-95 cursor-pointer shadow-sm hover:shadow"
              title={isDark ? "Light Mode" : "Dark Mode"}
            >
              {isDark ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="hidden sm:inline text-[10px] sm:text-xs ml-1" data-ar="فاتح" data-en="Light">{isArabic ? "فاتح" : "Light"}</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-indigo-500" />
                  <span className="hidden sm:inline text-[10px] sm:text-xs ml-1" data-ar="داكن" data-en="Dark">{isArabic ? "داكن" : "Dark"}</span>
                </>
              )}
            </button>

            {/* Direct Phone Link */}
            <button 
              onClick={triggerCall}
              className="flex items-center justify-center gap-1 px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2.5 rounded-lg text-white bg-app-blue hover:bg-app-blue/95 font-bold text-xs md:text-sm transition-all active:scale-95 cursor-pointer shadow-md shadow-app-blue/10 shrink-0"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{primaryPhone}</span>
              <span className="inline sm:hidden text-[11px]" data-ar="اتصل" data-en="Call">{isArabic ? "اتصل" : "Call"}</span>
            </button>

            {/* Distinct Direct WhatsApp Button */}
            <button 
              onClick={triggerGeneralWhatsApp}
              className="flex items-center justify-center gap-1 px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2.5 rounded-lg text-white font-bold text-xs md:text-sm transition-all hover:brightness-110 active:scale-95 cursor-pointer shadow-md shrink-0"
              style={{ backgroundColor: "#25D366" }}
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span className="hidden sm:inline text-[11px]" data-ar="واتساب" data-en="WhatsApp">{isArabic ? "واتساب" : "WhatsApp"}</span>
              <span className="inline sm:hidden text-[11px]" data-ar="واتساب" data-en="WA">{isArabic ? "واتساب" : "WA"}</span>
            </button>

          </div>

        </div>
      </header>

      {/* SUCCESS NOTIFICATION MODAL */}
      <AnimatePresence>
        {showNotification && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 100 }}
            className="fixed bottom-8 right-8 z-55 max-w-md bg-emerald-600 text-white p-4 rounded-xl shadow-xl flex items-center gap-3 border border-emerald-500 font-sans"
          >
            <CheckCircle2 className="w-8 h-8 flex-shrink-0 animate-bounce" />
            <div>
              <p className="font-bold text-sm" data-ar="طلب الحجز جاري التحضير" data-en="Preparing request dispatch">
                {isArabic ? "طلب الحجز جاري التحضير" : "Preparing request dispatch"}
              </p>
              <p className="text-xs opacity-95">{notificationMessage}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. FULL-SCREEN HERO BANNER (100vh) */}
      <section className="relative w-full h-[100vh] overflow-hidden bg-gray-950 flex flex-col justify-between">
        
        {/* Full screen HVAC Technician Background Image */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <img 
            src={cleanHvacTechnician} 
            alt="Professional adult male HVAC technician repairing wall-mounted split air conditioner" 
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          {/* Dark overlay for maximum cinematic readability */}
          <div className="absolute inset-0 bg-black/45" />
        </div>

        {/* Content Placeholder to align bottom scroll indicator */}
        <div className="flex-grow" />

        {/* Premium Scroll Down Indicator */}
        <div 
          onClick={() => {
            const contentSec = document.getElementById("hero-content");
            if (contentSec) {
              contentSec.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="relative pb-10 z-10 flex flex-col items-center justify-center gap-2 text-white animate-bounce cursor-pointer group hover:scale-105 active:scale-95 transition-all self-center"
        >
          <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] font-black font-mono text-white/80 group-hover:text-white transition-colors">
            {isArabic ? "اسحب لأسفل" : "Scroll Down"}
          </span>
          <ChevronDown className="w-5 h-5 text-app-blue animate-pulse" />
        </div>

      </section>

      {/* 2.2 HERO MARKETING HEADINGS & LEAD FORM SECTION */}
      <section id="hero-content" className="py-16 md:py-24 bg-app-bg text-app-text transition-all duration-300 relative z-20 border-b border-app-border scroll-mt-20">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Heading, Description & CTA Buttons (Span 7/12) */}
            <div className="lg:col-span-7 flex flex-col items-start gap-6 text-right lg:text-right" style={{ direction: isArabic ? "rtl" : "ltr" }}>
              
              {/* Trust Subheadline Badge */}
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-app-blue/10 text-app-blue font-extrabold text-xs md:text-sm shadow-sm border border-app-blue/20">
                <Sparkles className="w-4 h-4 text-[#00A3FF] animate-pulse" />
                <span data-ar="كشف مجاني • خبرة 5 سنين • ضمان على الشغل" data-en="Free Inspection • 5 Years Experience • Guaranteed Work">
                  {isArabic ? "كشف مجاني • خبرة 5 سنين • ضمان على الشغل" : "Free Inspection • 5 Years Experience • Guaranteed Work"}
                </span>
              </span>

              {/* Headline */}
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-app-text leading-tight tracking-tight uppercase">
                <span className="block text-gradient bg-gradient-to-r from-app-blue via-indigo-500 to-app-blue bg-clip-text text-transparent" data-ar="مكيفك خربان؟ نصلحه الحين بضمان ✓" data-en="AC Broken? We Fix It Now With Warranty ✓">
                  {isArabic ? "مكيفك خربان؟ نصلحه الحين بضمان ✓" : "AC Broken? We Fix It Now With Warranty ✓"}
                </span>
              </h1>

              {/* Description */}
              <p className="text-base md:text-lg lg:text-xl text-app-text-dim leading-relaxed font-semibold max-w-2xl">
                <span data-ar="شركة النور للخدمات الفنية — متخصصين في صيانة وتصليح كل أنواع المكيفات في دبي والشارقة وعجمان وباقي الإمارات. كشف مجاني وما تدفع شي لو ما عجبك الشغل." data-en="Al-Nour Technical Services — Specialists in repair and maintenance of all AC types across Dubai, Sharjah, Ajman and all UAE. Free inspection, no charge if not satisfied.">
                  {isArabic 
                    ? "شركة النور للخدمات الفنية — متخصصين في صيانة وتصليح كل أنواع المكيفات في دبي والشارقة وعجمان وباقي الإمارات. كشف مجاني وما تدفع شي لو ما عجبك الشغل." 
                    : "Al-Nour Technical Services — Specialists in repair and maintenance of all AC types across Dubai, Sharjah, Ajman and all UAE. Free inspection, no charge if not satisfied."}
                </span>
              </p>

              {/* Responsive CTA Buttons Row */}
              <div className="flex flex-col sm:flex-row gap-4 w-full max-w-lg mt-2">
                <a 
                  href={`tel:${primaryPhone}`}
                  className="flex-1 flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl bg-app-blue text-white font-extrabold text-sm md:text-base hover:bg-app-blue/90 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-app-blue/25 border border-white/10 text-center"
                >
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span data-ar="اتصل بفني النور" data-en="Call Support Now">
                    {isArabic ? "اتصل بفني النور" : "Call Support Now"}
                  </span>
                </a>
                <a 
                  href="https://wa.me/971505075707"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl bg-[#25D366] text-white font-extrabold text-sm md:text-base hover:bg-[#20ba5a] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-green-500/25 border border-white/10 text-center"
                >
                  <MessageCircle className="w-5 h-5 flex-shrink-0 fill-white text-white border-none" />
                  <span data-ar="تواصل واتساب" data-en="WhatsApp Support">
                    {isArabic ? "تواصل واتساب" : "WhatsApp Support"}
                  </span>
                </a>
              </div>

            </div>

            {/* Right Column: Lead Form Card (Span 5/12) */}
            <div className="lg:col-span-5 w-full">
              
              {/* Form Card wrapper */}
              <div className="bg-app-card-bg border-2 border-app-blue/20 shadow-xl rounded-2xl p-6 md:p-8" style={{ direction: isArabic ? "rtl" : "ltr" }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-app-blue/10 flex items-center justify-center text-app-blue">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-lg text-app-text flex items-center gap-1.5">
                      <span data-ar="احجز كشفك المجاني الحين" data-en="Book Your Free Inspection Now">
                        {isArabic ? "احجز كشفك المجاني الحين" : "Book Your Free Inspection Now"}
                      </span>
                      <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-ping" />
                    </h3>
                    <p className="text-xs text-app-text-dim" data-ar="تأكيد فوري مريح عبر الواتساب" data-en="Instant booking dispatcher">
                      {isArabic ? "تأكيد فوري مريح عبر الواتساب" : "Instant booking dispatcher"}
                    </p>
                  </div>
                </div>

                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  
                  {/* Field: Name */}
                  <div>
                    <label className="block text-xs font-bold text-app-text-dim mb-1.5 uppercase tracking-wide">
                      {isArabic ? "الاسم الكريم" : "Your Name"}
                    </label>
                    <input 
                      type="text" 
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={isArabic ? "مثال: محمد العامري" : "e.g. Mohammed Al Ameri"}
                      className="w-full px-4 py-3 rounded-xl border border-app-border bg-app-bg2 hover:border-app-blue/50 focus:border-app-blue focus:outline-none text-app-text text-sm transition-all shadow-inner"
                    />
                  </div>

                  {/* Field: WhatsApp Number */}
                  <div>
                    <label className="block text-xs font-bold text-app-text-dim mb-1.5 uppercase tracking-wide">
                      {isArabic ? "رقم الواتساب" : "WhatsApp Number"}
                    </label>
                    <div className="relative">
                      <input 
                        type="tel" 
                        required
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                        placeholder={isArabic ? "05XXXXXXXX" : "05XXXXXXXX"}
                        className="w-full px-4 py-3 rounded-xl border border-app-border bg-app-bg2 hover:border-app-blue/50 focus:border-app-blue focus:outline-none text-app-text text-sm transition-all shadow-inner text-left font-mono tracking-wider"
                        dir="ltr"
                      />
                      <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-[#25D366] bg-[#25D366]/10 px-2 py-0.5 rounded-md pointer-events-none">
                        UAE
                      </span>
                    </div>
                  </div>

                  {/* Dropdown Field: AC Issue Type */}
                  <div>
                    <label className="block text-xs font-bold text-app-text-dim mb-1.5 uppercase tracking-wide">
                      {isArabic ? "حدد مشكلة المكيف" : "AC Technical Problem"}
                    </label>
                    <div className="relative">
                      <select 
                        value={issue}
                        onChange={(e) => setIssue(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-app-border bg-app-bg2 hover:border-app-blue/50 focus:border-app-blue focus:outline-none text-app-text text-sm transition-all appearance-none cursor-pointer font-medium"
                      >
                        {isArabic ? (
                          <>
                            <option value="مكيف ما يبرد">مكيف ما يبرد</option>
                            <option value="تسريب مياه">تسريب مياه من المكيف</option>
                            <option value="صوت غريب">صوت غريب من الجهاز</option>
                            <option value="تنظيف">تنظيف شامل للمكيف</option>
                            <option value="شحن فريون">شحن وتعبئة فريون</option>
                            <option value="تركيب جديد">تركيب مكيف جديد</option>
                            <option value="غيره">مشكلة أخرى غير ذلك</option>
                          </>
                        ) : (
                          <>
                            <option value="Poor Cooling">Poor Cooling / Weak Air</option>
                            <option value="Water Leak">Water Leak / Drip Fix</option>
                            <option value="Strange Noise">Strange Noise / Vibration</option>
                            <option value="Cleaning">Full Pressure Cleaning</option>
                            <option value="Gas Refill">Gas Refill & Check</option>
                            <option value="New Installation">New AC Installation</option>
                            <option value="Other">Other Mechanical Problem</option>
                          </>
                        )}
                      </select>
                      <ChevronDown className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-app-text-dim pointer-events-none" />
                    </div>
                  </div>

                  {/* Dropdown Field: Emirate Territory */}
                  <div>
                    <label className="block text-xs font-bold text-app-text-dim mb-1.5 uppercase tracking-wide">
                      {isArabic ? "الإمارة الخاصة بك" : "Your Emirate"}
                    </label>
                    <div className="relative">
                      <select 
                        value={emirate}
                        onChange={(e) => setEmirate(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-app-border bg-app-bg2 hover:border-app-blue/50 focus:border-app-blue focus:outline-none text-app-text text-sm transition-all appearance-none cursor-pointer font-medium"
                      >
                        {isArabic ? (
                          <>
                            <option value="أبوظبي">أبوظبي</option>
                            <option value="دبي">دبي</option>
                            <option value="الشارقة">الشارقة</option>
                            <option value="عجمان">عجمان</option>
                            <option value="أم القيوين">أم القيوين</option>
                            <option value="الفجيرة">الفجيرة</option>
                            <option value="رأس الخيمة">رأس الخيمة</option>
                          </>
                        ) : (
                          <>
                            <option value="Abu Dhabi">Abu Dhabi</option>
                            <option value="Dubai">Dubai</option>
                            <option value="Sharjah">Sharjah</option>
                            <option value="Ajman">Ajman</option>
                            <option value="UAQ">Umm Al Quwain</option>
                            <option value="Fujairah">Fujairah</option>
                            <option value="RAK">Ras Al Khaimah</option>
                          </>
                        )}
                      </select>
                      <ChevronDown className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-app-text-dim pointer-events-none" />
                    </div>
                  </div>

                  {/* Main Submit CTA Button */}
                  <button 
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-white font-black text-sm md:text-base cursor-pointer hover:scale-[1.01] active:scale-[0.99] transition-all shadow-lg text-center"
                    style={{ backgroundColor: "#25D366" }}
                  >
                    <MessageCircle className="w-5 h-5 fill-white" />
                    <span data-ar="💬 احجز كشفك المجاني الحين" data-en="💬 Book Your Free Inspection Now">
                      {isArabic ? "احجز كشفك المجاني الحين" : "Book Your Free Inspection Now"}
                    </span>
                  </button>

                </form>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* NEW SECTION A: 4 KEY TRUST STATS BANNER */}
      <section className="-mt-10 mb-16 relative z-30 max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 bg-app-card-bg border border-app-border rounded-2xl p-6 md:p-8 shadow-xl">
          <div className="flex flex-col items-center text-center p-3" style={{ direction: isArabic ? "rtl" : "ltr" }}>
            <span className="w-12 h-12 rounded-xl bg-app-blue/10 text-app-blue flex items-center justify-center mb-3">
              <Briefcase className="w-6 h-6 animate-pulse" />
            </span>
            <h3 className="text-xl md:text-2xl font-black text-app-text">5+ Years</h3>
            <p className="text-xs text-app-text-dim font-medium" data-ar="خبرة ممتدة في الإمارات" data-en="Years Experience in UAE">
              {isArabic ? "خبرة ممتدة في الإمارات" : "Years Experience in UAE"}
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-3 border-r border-app-border/45" style={{ direction: isArabic ? "rtl" : "ltr" }}>
            <span className="w-12 h-12 rounded-xl bg-[#00A3FF]/10 text-[#00A3FF] flex items-center justify-center mb-3">
              <MapPin className="w-6 h-6" />
            </span>
            <h3 className="text-xl md:text-2xl font-black text-app-text">7 Emirates</h3>
            <p className="text-xs text-app-text-dim font-medium" data-ar="نغطي كافة أنحاء الدولة" data-en="Unmatched UAE Coverage">
              {isArabic ? "نغطي كافة أنحاء الدولة" : "Unmatched UAE Coverage"}
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-3 border-r border-app-border/45" style={{ direction: isArabic ? "rtl" : "ltr" }}>
            <span className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-3">
              <Phone className="w-6 h-6" />
            </span>
            <h3 className="text-xl md:text-2xl font-black text-app-text">24/7 VIP</h3>
            <p className="text-xs text-app-text-dim font-medium" data-ar="صيانة طارئة في أي وقت" data-en="24/7 Emergency Support">
              {isArabic ? "صيانة طارئة في أي وقت" : "24/7 Emergency Support"}
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-3 border-r border-app-border/45" style={{ direction: isArabic ? "rtl" : "ltr" }}>
            <span className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center mb-3">
              <ShieldCheck className="w-6 h-6 text-orange-500" />
            </span>
            <h3 className="text-xl md:text-2xl font-black text-app-text">100% ✓</h3>
            <p className="text-xs text-app-text-dim font-medium" data-ar="ضمان حقيقي على الشغل" data-en="Satisfaction Guaranteed">
              {isArabic ? "ضمان حقيقي على الشغل" : "Satisfaction Guaranteed"}
            </p>
          </div>
        </div>
      </section>

      {/* NEW SECTION B: LIVE PROOF CHASSIS AND THE 5 FEATURE BENEFIT MODULES */}
      <section className="py-12 md:py-16 max-w-7xl mx-auto px-4 md:px-8 bg-app-bg" id="why-us">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Premium Live proof banner with Image */}
          <div className="lg:col-span-6 w-full order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-app-border max-w-xl bg-black/40">
              <img 
                src={acInstallation} 
                alt="Al-Nour AC Technician Repair Work Dubai UAE" 
                className="w-full h-80 object-cover hover:scale-102 transition-all duration-700 opacity-95"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-6 justify-between text-white">
                <div>
                  <p className="text-xs text-orange-400 font-extrabold tracking-widest uppercase">Certified UAE Service</p>
                  <p className="text-lg font-extrabold" data-ar="فنيين النور في موقع العمل" data-en="Al-Nour Techs Live Work">
                    {isArabic ? "فنيين النور في موقع العمل" : "Al-Nour Techs Live Work"}
                  </p>
                </div>
                <div className="bg-app-blue text-xs font-bold px-3 py-1.5 rounded-lg border border-white/20 whitespace-nowrap">
                  ⚡ 20 Min Arrival
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Title and 5 bullet indicators list */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-6 order-1 lg:order-2" style={{ direction: isArabic ? "rtl" : "ltr" }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-app-blue/10 text-app-blue font-extrabold text-xs md:text-sm shadow-sm border border-app-blue/20">
              <Sparkles className="w-4 h-4 text-[#00A3FF] animate-pulse" />
              <span data-ar="كشف مجاني • خبرة 5 سنين • ضمان على الشغل" data-en="Free Inspection • 5 Years Experience • Guaranteed Work">
                {isArabic ? "كشف مجاني • خبرة 5 سنين • ضمان على الشغل" : "Free Inspection • 5 Years Experience • Guaranteed Work"}
              </span>
            </span>

            <h2 className="text-2xl md:text-4xl font-black text-app-text tracking-tight leading-tight">
              <span data-ar="ميزات حصرية لكافة عملائنا في دولة الإمارات" data-en="Exclusive Benefits For Our Valued Clients">
                {isArabic ? "ميزات حصرية لكافة عملائنا في دولة الإمارات" : "Exclusive Benefits For Our Valued Clients"}
              </span>
            </h2>

            <p className="text-sm md:text-base text-app-text-dim leading-relaxed max-w-xl font-medium">
              <span data-ar="نوفر لك تجربة صيانة مريحة واحترافية بالكامل تبدأ بكشف مجاني دقيق وجاهزية تامة على مدار الساعة وتغطية فورية وسريعة في إمارتك." data-en="We provide a completely comfortable and professional maintenance experience starting with a precise free inspection, full round-the-clock readiness, and prompt coverage across your emirate.">
                {isArabic 
                  ? "نوفر لك تجربة صيانة مريحة واحترافية بالكامل تبدأ بكشف مجاني دقيق وجاهزية تامة على مدار الساعة وتغطية فورية وسريعة في إمارتك." 
                  : "We provide a completely comfortable and professional maintenance experience starting with a precise free inspection, full round-the-clock readiness, and prompt coverage across your emirate."}
              </span>
            </p>

            {/* The 5 features layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full pt-2">
              {[
                { ar: "كشف مجاني بدون أي التزام", en: "Free inspection, no obligation" },
                { ar: "ضمان على كل الأشغال", en: "Warranty on all work" },
                { ar: "خبرة 5 سنين في الإمارات", en: "5 years experience in UAE" },
                { ar: "وصول سريع لعندك", en: "Fast response to your location" },
                { ar: "خدمة VIP للطوارئ", en: "VIP emergency service" }
              ].map((bullet, idx) => (
                <div key={idx} className="flex items-center gap-2.5 bg-app-card-bg border border-app-border p-3.5 rounded-xl shadow-sm hover:border-app-blue/30 transition-all font-semibold text-sm text-app-text">
                  <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span data-ar={bullet.ar} data-en={bullet.en}>
                    {isArabic ? bullet.ar : bullet.en}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 3. THE COMPREHENSIVE SERVICES, WHY US, AND STEP MODULES */}
      
      {/* 1. Services Grid Panel (6 elements with high contrast) */}
      <section className="py-16 md:py-24 bg-app-bg2/40 border-y border-app-border" id="services">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1 text-xs md:text-sm font-extrabold text-app-blue uppercase tracking-widest bg-app-blue/5 px-3 py-1 rounded-full mb-3">
              <span data-ar="🔧 خدماتنا" data-en="🔧 Our Services">
                {isArabic ? "🔧 خدماتنا" : "🔧 Our Services"}
              </span>
            </span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-app-text tracking-tight mb-4">
              <span data-ar="كل مشاكل مكيفك نحلّها بضمان" data-en="Every AC Problem, Fixed With Warranty">
                {isArabic ? "كل مشاكل مكيفك نحلّها بضمان" : "Every AC Problem, Fixed With Warranty"}
              </span>
            </h2>
            <div className="w-16 h-1.5 bg-app-blue mx-auto rounded-full" />
          </div>

          {/* 6 Grid Cards - Responsive (2 columns at 900px, 1 column at 520px) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Service card 1 */}
            <div className="bg-app-card-bg border border-app-border rounded-2xl overflow-hidden hover:border-app-blue/30 hover:shadow-lg transition-all duration-300 flex flex-col group">
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <img 
                  src={outdoorAcRepair} 
                  alt="Al-Nour poor cooling refill refrigerant level" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-550"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 right-3 bg-app-blue text-white text-xs font-black w-6 h-6 rounded-full flex items-center justify-center">1</span>
              </div>
              <div className="p-5 flex-grow text-right" style={{ direction: isArabic ? "rtl" : "ltr" }}>
                <h3 className="font-extrabold text-lg text-app-text mb-2 text-right">
                  <span data-ar="ضعف التبريد وشحن الفريون" data-en="Poor Cooling & Gas Refill">
                    {isArabic ? "ضعف التبريد وشحن الفريون" : "Poor Cooling & Gas Refill"}
                  </span>
                </h3>
                <p className="text-sm text-app-text-dim text-right font-medium">
                  <span data-ar="نفحص مستوى الفريون ونشحنه بالكمية الصح لضمان تبريد ممتاز" data-en="We check & refill gas to the right level for optimal cooling">
                    {isArabic ? "نفحص مستوى الفريون ونشحنه بالكمية الصح لضمان تبريد ممتاز" : "We check & refill gas to the right level for optimal cooling"}
                  </span>
                </p>
              </div>
            </div>

            {/* Service card 2 */}
            <div className="bg-app-card-bg border border-app-border rounded-2xl overflow-hidden hover:border-app-blue/30 hover:shadow-lg transition-all duration-300 flex flex-col group">
               <div className="relative h-48 overflow-hidden bg-gray-100">
                 <img 
                  src={acCleaningService} 
                  alt="AC unit water leak fix" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-550"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 right-3 bg-app-blue text-white text-xs font-black w-6 h-6 rounded-full flex items-center justify-center">2</span>
              </div>
              <div className="p-5 flex-grow text-right" style={{ direction: isArabic ? "rtl" : "ltr" }}>
                <h3 className="font-extrabold text-lg text-app-text mb-2 text-right">
                  <span data-ar="تسريب مياه من المكيف" data-en="Water Leakage Fix">
                    {isArabic ? "تسريب مياه من المكيف" : "Water Leakage Fix"}
                  </span>
                </h3>
                <p className="text-sm text-app-text-dim text-right font-medium">
                  <span data-ar="نحدد مصدر التسريب ونصلحه بسرعة قبل ما يسبب أضرار أكبر" data-en="We locate and fix leaks fast before they cause more damage">
                    {isArabic ? "نحدد مصدر التسريب ونصلحه بسرعة قبل ما يسبب أضرار أكبر" : "We locate and fix leaks fast before they cause more damage"}
                  </span>
                </p>
              </div>
            </div>

            {/* Service card 3 */}
            <div className="bg-app-card-bg border border-app-border rounded-2xl overflow-hidden hover:border-app-blue/30 hover:shadow-lg transition-all duration-300 flex flex-col group">
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <img 
                  src={acCoolingBreeze} 
                  alt="Unusual sound noise compressor" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-550"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 right-3 bg-app-blue text-white text-xs font-black w-6 h-6 rounded-full flex items-center justify-center">3</span>
              </div>
              <div className="p-5 flex-grow text-right" style={{ direction: isArabic ? "rtl" : "ltr" }}>
                <h3 className="font-extrabold text-lg text-app-text mb-2 text-right">
                  <span data-ar="صوت غريب من الجهاز" data-en="Noise & Vibration Fix">
                    {isArabic ? "صوت غريب من الجهاز" : "Noise & Vibration Fix"}
                  </span>
                </h3>
                <p className="text-sm text-app-text-dim text-right font-medium">
                  <span data-ar="نشخص سبب الصوت الغريب سواء من الوحدة الداخلية أو الخارجية" data-en="We diagnose unusual sounds from indoor or outdoor unit">
                    {isArabic ? "نشخص سبب الصوت الغريب سواء من الوحدة الداخلية أو الخارجية" : "We diagnose unusual sounds from indoor or outdoor unit"}
                  </span>
                </p>
              </div>
            </div>

            {/* Service card 4 */}
            <div className="bg-app-card-bg border border-app-border rounded-2xl overflow-hidden hover:border-app-blue/30 hover:shadow-lg transition-all duration-300 flex flex-col group">
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <img 
                  src={acCleaningService} 
                  alt="AC full pressure filter clean" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-550"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 right-3 bg-app-blue text-white text-xs font-black w-6 h-6 rounded-full flex items-center justify-center">4</span>
              </div>
              <div className="p-5 flex-grow text-right" style={{ direction: isArabic ? "rtl" : "ltr" }}>
                <h3 className="font-extrabold text-lg text-app-text mb-2 text-right">
                  <span data-ar="تنظيف شامل للمكيف" data-en="Full AC Cleaning">
                    {isArabic ? "تنظيف شامل للمكيف" : "Full AC Cleaning"}
                  </span>
                </h3>
                <p className="text-sm text-app-text-dim text-right font-medium">
                  <span data-ar="تنظيف الفلاتر والكويل والفان بمواد متخصصة لهواء نقي ونظيف" data-en="Full filter, coil & fan clean with specialist products">
                    {isArabic ? "تنظيف الفلاتر والكويل والفان بمواد متخصصة لهواء نقي ونظيف" : "Full filter, coil & fan clean with specialist products"}
                  </span>
                </p>
              </div>
            </div>

            {/* Service card 5 */}
            <div className="bg-app-card-bg border border-app-border rounded-2xl overflow-hidden hover:border-app-blue/30 hover:shadow-lg transition-all duration-300 flex flex-col group">
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <img 
                  src={acEmergencyVan} 
                  alt="Al-Nour technical services emergency team and van" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-550"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 right-3 bg-app-blue text-white text-xs font-black w-6 h-6 rounded-full flex items-center justify-center">5</span>
              </div>
              <div className="p-5 flex-grow text-right" style={{ direction: isArabic ? "rtl" : "ltr" }}>
                <h3 className="font-extrabold text-lg text-app-text mb-2 text-right">
                  <span data-ar="خدمة VIP طارئة" data-en="VIP Emergency Service">
                    {isArabic ? "خدمة VIP طارئة" : "VIP Emergency Service"}
                  </span>
                </h3>
                <p className="text-sm text-app-text-dim text-right font-medium">
                  <span data-ar="خدمة سريعة بأولوية عالية للحالات الطارئة نوصلك بأسرع" data-en="High-priority fast service for emergencies, we arrive ASAP">
                    {isArabic ? "خدمة سريعة بأولوية عالية للحالات الطارئة نوصلك بأسرع" : "High-priority fast service for emergencies, we arrive ASAP"}
                  </span>
                </p>
              </div>
            </div>

            {/* Service card 6 */}
            <div className="bg-app-card-bg border border-app-border rounded-2xl overflow-hidden hover:border-app-blue/30 hover:shadow-lg transition-all duration-300 flex flex-col group">
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <img 
                  src={acInstallation} 
                  alt="Installation AC units mounting brackets" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-550"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 right-3 bg-app-blue text-white text-xs font-black w-6 h-6 rounded-full flex items-center justify-center">6</span>
              </div>
              <div className="p-5 flex-grow text-right" style={{ direction: isArabic ? "rtl" : "ltr" }}>
                <h3 className="font-extrabold text-lg text-app-text mb-2 text-right">
                  <span data-ar="تركيب وصيانة دورية" data-en="Installation & Maintenance">
                    {isArabic ? "تركيب وصيانة دورية" : "Installation & Maintenance"}
                  </span>
                </h3>
                <p className="text-sm text-app-text-dim text-right font-medium">
                  <span data-ar="تركيب المكيفات الجديدة وبرامج صيانة دورية للحفاظ" data-en="New AC installation and scheduled maintenance programs">
                    {isArabic ? "تركيب المكيفات الجديدة وبرامج صيانة دورية للحفاظ" : "New AC installation and scheduled maintenance programs"}
                  </span>
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. THE WHY US SECTION (What Sets Us Apart) */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto w-full px-4 md:px-8">
        
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1 text-xs md:text-sm font-extrabold text-[#00A3FF] uppercase tracking-widest bg-[#00A3FF]/5 px-3 py-1 rounded-full mb-3">
            <span data-ar="⭐ ليش النور؟" data-en="⭐ Why Al-Nour?">
              {isArabic ? "⭐ ليش النور؟" : "⭐ Why Al-Nour?"}
            </span>
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-app-text tracking-tight mb-4">
            <span data-ar="اللي يميزنا عن أي شركة ثانية" data-en="What Sets Us Apart">
              {isArabic ? "اللي يميزنا عن أي شركة ثانية" : "What Sets Us Apart"}
            </span>
          </h2>
          <div className="w-16 h-1.5 bg-[#00A3FF] mx-auto rounded-full" />
        </div>

        {/* 4 Rich Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1 */}
          <div className="bg-app-card-bg border border-app-border p-6 rounded-2xl shadow-sm text-right flex flex-col justify-between hover:-translate-y-1 transition-all duration-300" style={{ direction: isArabic ? "rtl" : "ltr" }}>
            <div className="w-12 h-12 rounded-xl bg-[#00A3FF]/10 flex items-center justify-center text-[#00A3FF] mb-4">
              <span className="text-2xl">🔍</span>
            </div>
            <div>
              <h3 className="font-black text-lg text-app-text mb-2">
                <span data-ar="كشف مجاني — ما تدفع ولا درهم" data-en="Free inspection — zero cost">
                  {isArabic ? "كشف مجاني — ما تدفع ولا درهم" : "Free inspection — zero cost"}
                </span>
              </h3>
              <p className="text-sm text-app-text-dim font-medium">
                <span data-ar="نيجيلك ونفحص المكيف مجاناً بدون أي التزام منك" data-en="We come to you and inspect your AC for free, no obligation">
                  {isArabic ? "نيجيلك ونفحص المكيف مجاناً بدون أي التزام منك" : "We come to you and inspect your AC for free, no obligation"}
                </span>
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-app-card-bg border border-app-border p-6 rounded-2xl shadow-sm text-right flex flex-col justify-between hover:-translate-y-1 transition-all duration-300" style={{ direction: isArabic ? "rtl" : "ltr" }}>
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-4">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-black text-lg text-app-text mb-2">
                <span data-ar="ضمان على شغلنا — نرجع بدون كلام" data-en="Guaranteed work — we return free">
                  {isArabic ? "ضمان على شغلنا — نرجع بدون كلام" : "Guaranteed work — we return free"}
                </span>
              </h3>
              <p className="text-sm text-app-text-dim font-medium">
                <span data-ar="كل شغلة نعملها عليها ضمان لو في أي مشكلة نرجع فوراً" data-en="Everything we do is warranted we return immediately if needed">
                  {isArabic ? "كل شغلة نعملها عليها ضمان لو في أي مشكلة نرجع فوراً" : "Everything we do is warranted we return immediately if needed"}
                </span>
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-app-card-bg border border-app-border p-6 rounded-2xl shadow-sm text-right flex flex-col justify-between hover:-translate-y-1 transition-all duration-300" style={{ direction: isArabic ? "rtl" : "ltr" }}>
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <div>
              <h3 className="font-black text-lg text-app-text mb-2">
                <span data-ar="فنيين في كل الإمارات" data-en="Technicians across UAE">
                  {isArabic ? "فنيين في كل الإمارات" : "Technicians across UAE"}
                </span>
              </h3>
              <p className="text-sm text-app-text-dim font-medium">
                <span data-ar="عندنا فنيين في كل إمارة لضمان أسرع وقت وصول ليك" data-en="We have technicians in every emirate for fastest arrival">
                  {isArabic ? "عندنا فنيين في كل إمارة لضمان أسرع وقت وصول ليك" : "We have technicians in every emirate for fastest arrival"}
                </span>
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-app-card-bg border border-app-border p-6 rounded-2xl shadow-sm text-right flex flex-col justify-between hover:-translate-y-1 transition-all duration-300" style={{ direction: isArabic ? "rtl" : "ltr" }}>
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-500 mb-4">
              <span className="text-2xl">💰</span>
            </div>
            <div>
              <h3 className="font-black text-lg text-app-text mb-2">
                <span data-ar="أسعار واضحة — بدون مفاجآت" data-en="Clear prices — no surprises">
                  {isArabic ? "أسعار واضحة — بدون مفاجآت" : "Clear prices — no surprises"}
                </span>
              </h3>
              <p className="text-sm text-app-text-dim font-medium">
                <span data-ar="نعطيك السعر قبل الشغل مافي رسوم خفية أبداً" data-en="We quote before we start no hidden fees ever">
                  {isArabic ? "نعطيك السعر قبل الشغل مافي رسوم خفية أبداً" : "We quote before we start no hidden fees ever"}
                </span>
              </p>
            </div>
          </div>

        </div>

      </section>

      {/* 3. STEP BY STEP (How It Works) */}
      <section className="py-16 md:py-24 bg-app-bg2/40 border-y border-app-border">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-1 text-xs md:text-sm font-extrabold text-[#00A3FF] uppercase tracking-widest bg-[#00A3FF]/5 px-3 py-1 rounded-full mb-3">
              <span data-ar="⚙️ كيف نشتغل" data-en="⚙️ How It Works">
                {isArabic ? "⚙️ كيف نشتغل" : "⚙️ How It Works"}
              </span>
            </span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-app-text tracking-tight mb-4">
              <span data-ar="3 خطوات بس وخلصنا" data-en="Just 3 Steps and Done">
                {isArabic ? "3 خطوات بس وخلصنا" : "Just 3 Steps and Done"}
              </span>
            </h2>
            <div className="w-16 h-1.5 bg-[#00A3FF] mx-auto rounded-full" />
          </div>

          {/* 3 steps sequence flexed block */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
            
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center p-6 bg-app-card-bg border border-app-border rounded-2xl relative" style={{ direction: isArabic ? "rtl" : "ltr" }}>
              <span className="absolute -top-6 bg-app-blue text-white w-12 h-12 rounded-full flex items-center justify-center font-black text-lg border-4 border-app-bg shadow-md">
                1️⃣
              </span>
              <div className="w-16 h-16 rounded-full bg-app-blue/10 flex items-center justify-center text-app-blue mt-4 mb-4">
                <MessageCircle className="w-8 h-8 fill-current" />
              </div>
              <h3 className="font-extrabold text-xl text-app-text mb-2">
                <span data-ar="تواصل معنا عبر واتساب أو اتصال" data-en="Contact us via WhatsApp or Call">
                  {isArabic ? "تواصل معنا عبر واتساب أو اتصال" : "Contact us via WhatsApp or Call"}
                </span>
              </h3>
              <p className="text-sm text-app-text-dim leading-relaxed font-semibold">
                <span data-ar="كلمنا وقولنا المشكلة وين أنت" data-en="Tell us your issue and location">
                  {isArabic ? "كلمنا وقولنا المشكلة وين أنت" : "Tell us your issue and location"}
                </span>
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center p-6 bg-app-card-bg border border-app-border rounded-2xl relative" style={{ direction: isArabic ? "rtl" : "ltr" }}>
              <span className="absolute -top-6 bg-app-blue text-white w-12 h-12 rounded-full flex items-center justify-center font-black text-lg border-4 border-app-bg shadow-md">
                2️⃣
              </span>
              <div className="w-16 h-16 rounded-full bg-[#00A3FF]/10 flex items-center justify-center text-[#00A3FF] mt-4 mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="font-extrabold text-xl text-app-text mb-2">
                <span data-ar="الفني يوصلك بأسرع وقت" data-en="Technician arrives ASAP">
                  {isArabic ? "الفني يوصلك بأسرع وقت" : "Technician arrives ASAP"}
                </span>
              </h3>
              <p className="text-sm text-app-text-dim leading-relaxed font-semibold">
                <span data-ar="نبعتلك فني متخصص على طول" data-en="We dispatch a specialist immediately">
                  {isArabic ? "نبعتلك فني متخصص على طول" : "We dispatch a specialist immediately"}
                </span>
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center p-6 bg-app-card-bg border border-app-border rounded-2xl relative" style={{ direction: isArabic ? "rtl" : "ltr" }}>
              <span className="absolute -top-6 bg-app-blue text-white w-12 h-12 rounded-full flex items-center justify-center font-black text-lg border-4 border-app-bg shadow-md">
                3️⃣
              </span>
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 mt-4 mb-4">
                <Wrench className="w-8 h-8 opacity-100" />
              </div>
              <h3 className="font-extrabold text-xl text-app-text mb-2">
                <span data-ar="نشخص ونصلح بضمان" data-en="We diagnose & fix with warranty">
                  {isArabic ? "نشخص ونصلح بضمان" : "We diagnose & fix with warranty"}
                </span>
              </h3>
              <p className="text-sm text-app-text-dim leading-relaxed font-semibold">
                <span data-ar="نحل المشكلة ونعطيك ضمان على الشغل" data-en="Problem solved with full warranty">
                  {isArabic ? "نحل المشكلة ونعطيك ضمان على الشغل" : "Problem solved with full warranty"}
                </span>
              </p>
            </div>

          </div>

        </div>
      </section>



      {/* 4. THE 6 COVERED CITIES & HELPFUL TIPS/BLOGS BLOCK */}
      
      {/* Cities Coverage Section */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto w-full px-4 md:px-8">
        
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-1 text-xs md:text-sm font-extrabold text-app-blue uppercase tracking-widest bg-app-blue/5 px-3 py-1 rounded-full mb-3">
            <span data-ar="📍 مناطق الخدمة" data-en="📍 Service Areas">
              {isArabic ? "📍 مناطق الخدمة" : "📍 Service Areas"}
            </span>
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-app-text tracking-tight mb-4">
            <span data-ar="نخدم 7 إمارات في الدولة" data-en="Serving 7 Emirates Across UAE">
              {isArabic ? "نخدم 7 إمارات في الدولة" : "Serving 7 Emirates Across UAE"}
            </span>
          </h2>
          <div className="w-16 h-1.5 bg-app-blue mx-auto rounded-full" />
        </div>

        {/* 7 Emirates cards with premium dynamic maps displaying service coverage for each region */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Abu Dhabi */}
          <div className="group relative h-64 rounded-2xl overflow-hidden border border-app-border bg-gray-950 flex items-end p-6 select-none shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0F2040] via-[#0A1628] to-[#1e293b] opacity-85 group-hover:opacity-95 transition-all duration-500 flex items-center justify-center">
              <div className="relative">
                <div className="absolute -inset-4 rounded-full bg-app-blue/20 blur-md animate-ping" style={{ animationDuration: "3s" }} />
                <MapPin className="w-12 h-12 text-[#00A3FF] drop-shadow-[0_0_10px_rgba(0,163,255,0.5)] transition-transform group-hover:scale-110 duration-500" />
              </div>
            </div>
            <div className="relative z-10 text-start w-full" style={{ direction: isArabic ? "rtl" : "ltr" }}>
              <span className="text-xs font-bold text-[#00A3FF] uppercase tracking-wider bg-[#00A3FF]/10 px-2.5 py-1 rounded-md mb-2 inline-block">UAE</span>
              <h3 className="text-2xl font-black text-white">
                {isArabic ? "أبوظبي" : "Abu Dhabi"}
              </h3>
              <p className="text-xs text-slate-200" data-ar="تغطية سريعة في العاصمة وضواحيها" data-en="Fast coverage in the Capital & suburbs">
                {isArabic ? "تغطية سريعة في العاصمة وضواحيها" : "Fast coverage in the Capital & suburbs"}
              </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />
          </div>

          {/* Dubai */}
          <div className="group relative h-64 rounded-2xl overflow-hidden border border-app-border bg-gray-950 flex items-end p-6 select-none shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0F2040] via-[#0A1628] to-[#1e293b] opacity-85 group-hover:opacity-95 transition-all duration-500 flex items-center justify-center">
              <div className="relative">
                <div className="absolute -inset-4 rounded-full bg-app-blue/20 blur-md animate-ping" style={{ animationDuration: "3s" }} />
                <MapPin className="w-12 h-12 text-[#00A3FF] drop-shadow-[0_0_10px_rgba(0,163,255,0.5)] transition-transform group-hover:scale-110 duration-500" />
              </div>
            </div>
            <div className="relative z-10 text-start w-full" style={{ direction: isArabic ? "rtl" : "ltr" }}>
              <span className="text-xs font-bold text-[#00A3FF] uppercase tracking-wider bg-[#00A3FF]/10 px-2.5 py-1 rounded-md mb-2 inline-block">UAE</span>
              <h3 className="text-2xl font-black text-white">
                {isArabic ? "دبي" : "Dubai"}
              </h3>
              <p className="text-xs text-slate-200" data-ar="تغطية كاملة لكل المناطق" data-en="Full coverage across all areas">
                {isArabic ? "تغطية كاملة لكل المناطق" : "Full coverage across all areas"}
              </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />
          </div>

          {/* Sharjah */}
          <div className="group relative h-64 rounded-2xl overflow-hidden border border-app-border bg-gray-955 flex items-end p-6 select-none shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0F2040] via-[#0A1628] to-[#1e293b] opacity-85 group-hover:opacity-95 transition-all duration-500 flex items-center justify-center">
              <div className="relative">
                <div className="absolute -inset-4 rounded-full bg-emerald-400/20 blur-md animate-ping" style={{ animationDuration: "3s" }} />
                <MapPin className="w-12 h-12 text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.5)] transition-transform group-hover:scale-110 duration-500" />
              </div>
            </div>
            <div className="relative z-10 text-start w-full" style={{ direction: isArabic ? "rtl" : "ltr" }}>
              <span className="text-xs font-bold text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded-md mb-2 inline-block">UAE</span>
              <h3 className="text-2xl font-black text-white">
                {isArabic ? "الشارقة" : "Sharjah"}
              </h3>
              <p className="text-xs text-slate-200" data-ar="خدمة سريعة بكل الأحياء" data-en="Fast service in all districts">
                {isArabic ? "خدمة سريعة بكل الأحياء" : "Fast service in all districts"}
              </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />
          </div>

          {/* Ajman */}
          <div className="group relative h-64 rounded-2xl overflow-hidden border border-app-border bg-gray-950 flex items-end p-6 select-none shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0F2040] via-[#0A1628] to-[#1e293b] opacity-85 group-hover:opacity-95 transition-all duration-500 flex items-center justify-center">
              <div className="relative">
                <div className="absolute -inset-4 rounded-full bg-amber-400/20 blur-md animate-ping" style={{ animationDuration: "3s" }} />
                <MapPin className="w-12 h-12 text-amber-400 drop-shadow-[0_0_10px_rgba(251,191,36,0.5)] transition-transform group-hover:scale-110 duration-500" />
              </div>
            </div>
            <div className="relative z-10 text-start w-full" style={{ direction: isArabic ? "rtl" : "ltr" }}>
              <span className="text-xs font-bold text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-md mb-2 inline-block">UAE</span>
              <h3 className="text-2xl font-black text-white">
                {isArabic ? "عجمان" : "Ajman"}
              </h3>
              <p className="text-xs text-slate-200" data-ar="تغطية شاملة لعجمان" data-en="Full Ajman coverage">
                {isArabic ? "تغطية شاملة لعجمان" : "Full Ajman coverage"}
              </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />
          </div>

          {/* Umm Al Quwain */}
          <div className="group relative h-64 rounded-2xl overflow-hidden border border-app-border bg-gray-955 flex items-end p-6 select-none shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0F2040] via-[#0A1628] to-[#1e293b] opacity-85 group-hover:opacity-95 transition-all duration-500 flex items-center justify-center">
              <div className="relative">
                <div className="absolute -inset-4 rounded-full bg-orange-400/20 blur-md animate-ping" style={{ animationDuration: "3s" }} />
                <MapPin className="w-12 h-12 text-orange-400 drop-shadow-[0_0_10px_rgba(251,146,60,0.5)] transition-transform group-hover:scale-110 duration-500" />
              </div>
            </div>
            <div className="relative z-10 text-start w-full" style={{ direction: isArabic ? "rtl" : "ltr" }}>
              <span className="text-xs font-bold text-orange-400 bg-orange-400/10 px-2.5 py-1 rounded-md mb-2 inline-block">UAE</span>
              <h3 className="text-2xl font-black text-white">
                {isArabic ? "أم القيوين" : "UAQ"}
              </h3>
              <p className="text-xs text-slate-200" data-ar="نوصلك بأسرع وقت" data-en="Fast arrival guaranteed">
                {isArabic ? "نوصلك بأسرع وقت" : "Fast arrival guaranteed"}
              </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />
          </div>

          {/* Fujairah */}
          <div className="group relative h-64 rounded-2xl overflow-hidden border border-app-border bg-gray-955 flex items-end p-6 select-none shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0F2040] via-[#0A1628] to-[#1e293b] opacity-85 group-hover:opacity-95 transition-all duration-500 flex items-center justify-center">
              <div className="relative">
                <div className="absolute -inset-4 rounded-full bg-cyan-400/20 blur-md animate-ping" style={{ animationDuration: "3s" }} />
                <MapPin className="w-12 h-12 text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)] transition-transform group-hover:scale-110 duration-500" />
              </div>
            </div>
            <div className="relative z-10 text-start w-full" style={{ direction: isArabic ? "rtl" : "ltr" }}>
              <span className="text-xs font-bold text-cyan-400 bg-cyan-400/10 px-2.5 py-1 rounded-md mb-2 inline-block">UAE</span>
              <h3 className="text-2xl font-black text-white">
                {isArabic ? "الفجيرة" : "Fujairah"}
              </h3>
              <p className="text-xs text-slate-200" data-ar="خدمة موثوقة في الفجيرة" data-en="Reliable service in Fujairah">
                {isArabic ? "خدمة موثوقة في الفجيرة" : "Reliable service in Fujairah"}
              </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />
          </div>

          {/* Ras Al Khaimah (RAK) */}
          <div className="group relative h-64 rounded-2xl overflow-hidden border border-app-border bg-gray-950 flex items-end p-6 select-none shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0F2040] via-[#0A1628] to-[#1e293b] opacity-85 group-hover:opacity-95 transition-all duration-500 flex items-center justify-center">
              <div className="relative">
                <div className="absolute -inset-4 rounded-full bg-rose-400/20 blur-md animate-ping" style={{ animationDuration: "3s" }} />
                <MapPin className="w-12 h-12 text-rose-400 drop-shadow-[0_0_10px_rgba(251,113,133,0.5)] transition-transform group-hover:scale-110 duration-500" />
              </div>
            </div>
            <div className="relative z-10 text-start w-full" style={{ direction: isArabic ? "rtl" : "ltr" }}>
              <span className="text-xs font-bold text-rose-400 bg-rose-400/10 px-2.5 py-1 rounded-md mb-2 inline-block">UAE</span>
              <h3 className="text-2xl font-black text-white">
                {isArabic ? "رأس الخيمة" : "RAK"}
              </h3>
              <p className="text-xs text-slate-200" data-ar="فنيين متخصصين في رأس الخيمة" data-en="Expert technicians in RAK">
                {isArabic ? "فنيين متخصصين في رأس الخيمة" : "Expert technicians in RAK"}
              </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />
          </div>

        </div>

      </section>

      {/* Helpful Tips / Blog Section */}
      <section className="py-16 md:py-24 bg-app-bg2/40 border-y border-app-border">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-1 text-xs md:text-sm font-extrabold text-app-blue uppercase tracking-widest bg-app-blue/5 px-3 py-1 rounded-full mb-3">
              <span data-ar="📝 المدونة" data-en="📝 Blog">
                {isArabic ? "📝 المدونة" : "📝 Blog"}
              </span>
            </span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-app-text tracking-tight mb-4">
              <span data-ar="نصايح ومعلومات مفيدة" data-en="Tips & Useful Information">
                {isArabic ? "نصايح ومعلومات مفيدة" : "Tips & Useful Information"}
              </span>
            </h2>
            <div className="w-16 h-1.5 bg-app-blue mx-auto rounded-full" />
          </div>

          {/* 3 Articles Layout - column adaptive at 900px */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Article 1 */}
            <div 
              onClick={() => setSelectedArticle(0)}
              className="bg-app-card-bg border border-app-border rounded-xl overflow-hidden hover:shadow-all transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div className="h-48 overflow-hidden bg-gray-100">
                <img 
                  src={acCleaningService} 
                  alt="air conditioner maintenance test troubleshooting" 
                  className="w-full h-full object-cover group-hover:scale-103 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 text-right flex-grow flex flex-col justify-between" style={{ direction: isArabic ? "rtl" : "ltr" }}>
                <div>
                  <h3 className="font-extrabold text-lg text-app-text mb-2.5 leading-snug">
                    <span data-ar="كيف تعرف إن مكيفك يحتاج صيانة؟" data-en="How to Know If Your AC Needs Service">
                      {isArabic ? "كيف تعرف إن مكيفك يحتاج صيانة؟" : "How to Know If Your AC Needs Service"}
                    </span>
                  </h3>
                  <p className="text-xs md:text-sm text-app-text-dim mb-4 leading-relaxed font-semibold">
                    <span data-ar="لو مكيفك ما يبرد زين أو تسمع أصوات غريبة أو شايف مياه تسرب — هذي علامات إن مكيفك يحتاج صيانة عاجلة" data-en="If your AC isn't cooling well, making strange noises or leaking water — these are signs it needs urgent service">
                      {isArabic 
                        ? "لو مكيفك ما يبرد زين أو تسمع أصوات غريبة أو شايف مياه تسرب — هذي علامات إن مكيفك يحتاج صيانة عاجلة" 
                        : "If your AC isn't cooling well, making strange noises or leaking water — these are signs it needs urgent service"}
                    </span>
                  </p>
                </div>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedArticle(0);
                  }}
                  className="text-xs font-black text-app-blue hover:text-app-blue/80 flex items-center justify-end gap-1 group/btn cursor-pointer bg-transparent border-none mt-2"
                >
                  <span data-ar="اقرأ المقالة ←" data-en="Read Article →">{isArabic ? "اقرأ المقالة ←" : "Read Article →"}</span>
                </button>
              </div>
            </div>

            {/* Article 2 */}
            <div 
              onClick={() => setSelectedArticle(1)}
              className="bg-app-card-bg border border-app-border rounded-xl overflow-hidden hover:shadow-all transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div className="h-48 overflow-hidden bg-gray-100">
                <img 
                  src={acCoolingBreeze} 
                  alt="split ac unit compressor outer side" 
                  className="w-full h-full object-cover group-hover:scale-103 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 text-right flex-grow flex flex-col justify-between" style={{ direction: isArabic ? "rtl" : "ltr" }}>
                <div>
                  <h3 className="font-extrabold text-lg text-app-text mb-2.5 leading-snug">
                    <span data-ar="الفرق بين السبليت والمركزي والشباك" data-en="Split vs Central vs Window AC">
                      {isArabic ? "الفرق بين السبليت والمركزي والشباك" : "Split vs Central vs Window AC"}
                    </span>
                  </h3>
                  <p className="text-xs md:text-sm text-app-text-dim mb-4 leading-relaxed font-semibold">
                    <span data-ar="كل نوع مكيف إله مميزاته واستخداماته الصح — اعرف الفرق وشوف أيهم يناسب بيتك أو مكتبك" data-en="Each AC type has its own advantages and best use cases — find out which suits your home or office">
                      {isArabic 
                        ? "كل نوع مكيف إله مميزاته واستخداماته الصح — اعرف الفرق وشوف أيهم يناسب بيتك أو مكتبك" 
                        : "Each AC type has its own advantages and best use cases — find out which suits your home or office"}
                    </span>
                  </p>
                </div>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedArticle(1);
                  }}
                  className="text-xs font-black text-app-blue hover:text-app-blue/80 flex items-center justify-end gap-1 group/btn cursor-pointer bg-transparent border-none mt-2"
                >
                  <span data-ar="اقرأ المقالة ←" data-en="Read Article →">{isArabic ? "اقرأ المقالة ←" : "Read Article →"}</span>
                </button>
              </div>
            </div>

            {/* Article 3 */}
            <div 
              onClick={() => setSelectedArticle(2)}
              className="bg-app-card-bg border border-app-border rounded-xl overflow-hidden hover:shadow-all transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div className="h-48 overflow-hidden bg-gray-100">
                <img 
                  src={outdoorAcRepair} 
                  alt="ac filter cleaning water pressure" 
                  className="w-full h-full object-cover group-hover:scale-103 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 text-right flex-grow flex flex-col justify-between" style={{ direction: isArabic ? "rtl" : "ltr" }}>
                <div>
                  <h3 className="font-extrabold text-lg text-app-text mb-2.5 leading-snug">
                    <span data-ar="ليش لازم تنظف مكيفك كل 3 شهور" data-en="Why Clean Your AC Every 3 Months">
                      {isArabic ? "ليش لازم تنظف مكيفك كل 3 شهور" : "Why Clean Your AC Every 3 Months"}
                    </span>
                  </h3>
                  <p className="text-xs md:text-sm text-app-text-dim mb-4 leading-relaxed font-semibold">
                    <span data-ar="التنظيف المنتظم يطول عمر المكيف ويوفر لك فلوس الكهرباء ويضمن لك هواء نظيف وصحي في بيتك" data-en="Regular cleaning extends your AC life saves electricity bills and ensures clean healthy air in your home">
                      {isArabic 
                        ? "التنظيف المنتظم يطول عمر المكيف ويوفر لك فلوس الكهرباء ويضمن لك هواء نظيف وصحي في بيتك" 
                        : "Regular cleaning extends your AC life saves electricity bills and ensures clean healthy air in your home"}
                    </span>
                  </p>
                </div>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedArticle(2);
                  }}
                  className="text-xs font-black text-app-blue hover:text-app-blue/80 flex items-center justify-end gap-1 group/btn cursor-pointer bg-transparent border-none mt-2"
                >
                  <span data-ar="اقرأ المقالة ←" data-en="Read Article →">{isArabic ? "اقرأ المقالة ←" : "Read Article →"}</span>
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. THE FINAL CTA, FOOTER AND FLOATING INTERACTIVE COMPONENT */}
      
      {/* CTA Strip Banner with Gradient #0077CC and #00A3FF */}
      <section className="my-16 mx-4 md:mx-8 max-w-7xl lg:mx-auto">
        <div 
          className="rounded-3xl p-8 md:p-12 text-white flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-xl"
          style={{ backgroundImage: "linear-gradient(135deg, #0077CC, #00A3FF)" }}
        >
          {/* Backdrop worker working on AC with 30% opacity */}
          <div className="absolute inset-0 pointer-events-none opacity-30 mix-blend-overlay">
            <img 
              src={outdoorAcRepair} 
              alt="Technician working on AC background" 
              className="w-full h-full object-cover select-none pointer-events-none"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Backdrop Graphic Snowflake */}
          <div className="absolute -right-16 -bottom-16 text-white/10 pointer-events-none">
            <Snowflake className="w-64 h-64 rotate-12" />
          </div>

          <div className="relative z-10 text-right lg:text-right flex-grow max-w-3xl" style={{ direction: isArabic ? "rtl" : "ltr" }}>
            <h2 className="text-3xl md:text-4xl font-black mb-3">
              <span data-ar="مكيفك فيه مشكلة؟ تواصل معنا الحين!" data-en="AC Problem? Contact Us Now!">
                {isArabic ? "مكيفك فيه مشكلة؟ تواصل معنا الحين!" : "AC Problem? Contact Us Now!"}
              </span>
            </h2>
            <p className="text-lg text-white/90 font-bold mb-0">
              <span data-ar="كشف مجاني • رد سريع • ضمان على الشغل" data-en="Free Inspection • Fast Response • Guaranteed Work">
                {isArabic ? "كشف مجاني • رد سريع • ضمان على الشغل" : "Free Inspection • Fast Response • Guaranteed Work"}
              </span>
            </p>
          </div>

          {/* Buttons trigger links to WhatsApp and Calls */}
          <div className="relative z-10 flex flex-wrap gap-4 items-center shrink-0">
            
            {/* Button 1: WhatsApp (#25D366) */}
            <a 
              href="https://wa.me/971505075707" 
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-4 rounded-xl text-white font-extrabold text-sm md:text-base hover:scale-105 active:scale-95 transition-all shadow-lg"
              style={{ backgroundColor: "#25D366" }}
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span data-ar="💬 تواصل عبر واتساب" data-en="💬 Contact via WhatsApp">
                {isArabic ? "💬 تواصل عبر واتساب" : "💬 Contact via WhatsApp"}
              </span>
            </a>

            {/* Button 2: Call transparent + white border */}
            <a 
              href={`tel:${primaryPhone}`}
              className="flex items-center gap-2 px-6 py-4 rounded-xl text-white font-extrabold text-sm md:text-base bg-transparent border-2 border-white hover:bg-white/10 active:scale-95 transition-all"
            >
              <Phone className="w-5 h-5" />
              <span data-ar="📞 اتصل: 0505075707" data-en="📞 Call: 0505075707">
                {isArabic ? `📞 اتصل: ${primaryPhone}` : `📞 Call: ${primaryPhone}`}
              </span>
            </a>

          </div>

        </div>
      </section>

      {/* Elegant Al-Nour Footer block with correct copyright details */}
      <footer className="pt-12 pb-6 border-t border-app-border bg-app-bg2/40" style={{ direction: isArabic ? "rtl" : "ltr" }}>
        <div className="container mx-auto px-4 md:px-8 max-w-7xl text-center">
          
          <div className="flex items-center justify-center gap-2.5 mb-6">
            <div className="w-10 h-10 rounded-xl bg-app-blue flex items-center justify-center text-white shadow-md shadow-app-blue/20">
              <Snowflake className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-sans font-black text-lg sm:text-xl text-app-text">
              {isArabic ? "شركة النور للخدمات الفنية" : "Al-Nour Technical Services"}
            </h3>
          </div>

          <div className="mb-4">
            <a 
              href={`tel:${primaryPhone}`} 
              className="inline-flex items-center gap-2 bg-app-blue/10 text-app-blue hover:underline py-2 px-4 rounded-lg font-bold text-base"
              dir="ltr"
            >
              <Phone className="w-4 h-4" />
              <span>0505075707</span>
            </a>
          </div>

          {/* Emirates territories */}
          <p className="text-sm text-app-text-dim font-bold mb-8 tracking-wide max-w-xl mx-auto">
            <span data-ar="دبي • الشارقة • عجمان • أم القيوين • الفجيرة • رأس الخيمة" data-en="Dubai • Sharjah • Ajman • UAQ • Fujairah • RAK">
              {isArabic 
                ? "دبي • الشارقة • عجمان • أم القيوين • الفجيرة • رأس الخيمة" 
                : "Dubai • Sharjah • Ajman • UAQ • Fujairah • RAK"}
            </span>
          </p>

          <div className="text-xs text-app-text-dim/80 pt-6 border-t border-app-border/50">
            <span data-ar="© 2026 شركة النور للخدمات الفنية — جميع الحقوق محفوظة" data-en="© 2026 Al-Nour Technical Services — All Rights Reserved">
              {isArabic 
                ? "© 2026 شركة النور للخدمات الفنية — جميع الحقوق محفوظة" 
                : "© 2026 Al-Nour Technical Services — All Rights Reserved"}
            </span>
          </div>

        </div>
      </footer>

      {/* BLOG ARTICLE DETAIL OVERLAY MODAL */}
      <AnimatePresence>
        {selectedArticle !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedArticle(null)}
            className="fixed inset-0 z-55 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 30, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-app-card-bg border border-app-border rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative text-right flex flex-col my-8"
              style={{ direction: isArabic ? "rtl" : "ltr" }}
            >
              {/* Close Button top corner */}
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center cursor-pointer transition-all active:scale-95 text-lg font-bold"
                title={isArabic ? "إغلاق" : "Close"}
              >
                ✕
              </button>

              {/* Cover Image in modal */}
              <div className="relative h-64 md:h-80 w-full shrink-0">
                <img
                  src={blogArticles[selectedArticle].image}
                  alt={isArabic ? blogArticles[selectedArticle].titleAr : blogArticles[selectedArticle].titleEn}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-app-card-bg via-app-card-bg/50 to-transparent" />
                
                {/* Title badge */}
                <div className="absolute bottom-6 left-6 right-6 text-right">
                  <span className="bg-app-blue text-white text-xs font-black px-2.5 py-1 rounded-md tracking-wider uppercase mb-3 inline-block">
                    {isArabic ? "مقالات النور المميزة" : "Al-Nour Editorial"}
                  </span>
                  <h3 className="text-xl md:text-3xl font-black text-white drop-shadow-md">
                    {isArabic ? blogArticles[selectedArticle].titleAr : blogArticles[selectedArticle].titleEn}
                  </h3>
                </div>
              </div>

              {/* Body Text Content */}
              <div className="p-6 md:p-8 space-y-6 text-app-text">
                <p className="text-base md:text-lg text-app-text font-black leading-relaxed border-r-4 border-app-blue pr-4 pl-1">
                  {isArabic ? blogArticles[selectedArticle].introAr : blogArticles[selectedArticle].introEn}
                </p>

                {/* Sections list */}
                <div className="space-y-6 pt-2">
                  {blogArticles[selectedArticle].sections.map((section, idx) => (
                    <div key={idx} className="space-y-2 bg-app-bg2/40 border border-app-border/60 p-4 rounded-xl shadow-sm hover:border-app-blue/20 transition-all">
                      <h4 className="font-extrabold text-base md:text-lg text-app-blue flex items-center gap-2">
                        <span>{isArabic ? section.headingAr : section.headingEn}</span>
                      </h4>
                      <p className="text-xs md:text-sm text-app-text-dim leading-relaxed font-semibold">
                        {isArabic ? section.textAr : section.textEn}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Bottom Call to Action strip inline with the article */}
                <div className="bg-app-blue/10 border border-app-blue/20 rounded-xl p-5 mt-6 text-center">
                  <p className="text-xs md:text-sm font-bold text-app-text mb-4">
                    {isArabic ? blogArticles[selectedArticle].ctaAr : blogArticles[selectedArticle].ctaEn}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 items-center justify-center">
                    {/* Call CTA button */}
                    <a
                      href={`tel:${primaryPhone}`}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-white bg-app-blue hover:bg-app-blue/95 font-bold text-xs md:text-sm transition-all active:scale-95 shadow-md"
                    >
                      <Phone className="w-4 h-4" />
                      <span>{isArabic ? "اتصل الحين" : "Call Now"}</span>
                    </a>

                    {/* WhatsApp CTA button */}
                    <button
                      onClick={() => {
                        const messageText = isArabic 
                          ? `مرحباً شركة النور الفنية، أود حجز كشف مجاني بناءً على مقالكم حول: ${blogArticles[selectedArticle].titleAr}`
                          : `Hello Al-Nour, I would like to book a free inspection after reading your article: ${blogArticles[selectedArticle].titleEn}`;
                        window.open(`https://wa.me/971505075707?text=${encodeURIComponent(messageText)}`, "_blank");
                        setSelectedArticle(null);
                      }}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-white font-bold text-xs md:text-sm transition-all hover:brightness-110 active:scale-95 shadow-md cursor-pointer"
                      style={{ backgroundColor: "#25D366" }}
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>{isArabic ? "احجز كشف مجاني" : "Book Free Inspection"}</span>
                    </button>
                    
                    {/* Close button */}
                    <button
                      onClick={() => setSelectedArticle(null)}
                      className="px-5 py-2.5 rounded-lg border border-app-border hover:bg-app-bg2 text-app-text font-bold text-xs md:text-sm transition-all active:scale-95 cursor-pointer"
                    >
                      <span>{isArabic ? "إغلاق المقال" : "Close Article"}</span>
                    </button>
                  </div>
                </div>

              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. FLOATING ANIMATED CALL (رن) COMPONENT */}
      <a 
        href={`tel:${primaryPhone}`}
        className="fixed z-50 flex items-center justify-center gap-2 px-4 shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 font-sans select-none cursor-pointer border border-white/20"
        style={{ 
          background: "linear-gradient(135deg,#ff4fa0,#c13dd7)",
          height: isMobile ? "48px" : "56px",
          width: isMobile ? "120px" : "150px",
          borderRadius: "9999px",
          left: isArabic ? "auto" : (isMobile ? "16px" : "30px"),
          right: isArabic ? (isMobile ? "16px" : "30px") : "auto",
          bottom: isMobile ? "80px" : "102px",
          flexDirection: isArabic ? "row-reverse" : "row"
        }}
        title={isArabic ? "اتصل الآن بفني النور" : "Call Al-Nour Technical Support"}
      >
        {/* Ripple rings */}
        <span className="absolute inset-0 rounded-full bg-[#ff4fa0]/25 animate-ping pointer-events-none" />
        <span className="text-xl md:text-2xl flex-shrink-0 z-10 select-none">📞</span>
        <span className="whitespace-nowrap text-xs md:text-sm font-black text-white leading-none z-10 select-none">
          {isArabic ? "اتصل الآن" : "Call Now"}
        </span>
      </a>

      {/* 3. FLOATING ANIMATED RIPPLING WHATSAPP COMPONENT */}
      <a 
        href="https://wa.me/971505075707"
        target="_blank"
        rel="noreferrer"
        className="fixed z-50 flex items-center justify-center gap-2 px-4 shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 font-sans select-none cursor-pointer border border-white/20"
        style={{ 
          backgroundColor: "#25D366",
          height: isMobile ? "48px" : "56px",
          width: isMobile ? "120px" : "150px",
          borderRadius: "9999px",
          left: isArabic ? "auto" : (isMobile ? "16px" : "30px"),
          right: isArabic ? (isMobile ? "16px" : "30px") : "auto",
          bottom: isMobile ? "20px" : "30px",
          flexDirection: isArabic ? "row-reverse" : "row"
        }}
        title={isArabic ? "تواصل معنا عبر واتساب" : "Al-Nour WhatsApp Support"}
      >
        {/* Ripple rings */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]/35 animate-ping pointer-events-none" />
        <span className="text-2xl md:text-3xl flex-shrink-0 z-10 select-none">💬</span>
        <span className="whitespace-nowrap text-xs md:text-sm font-black text-white leading-none z-10 select-none">
          {isArabic ? "واتساب" : "WhatsApp"}
        </span>
      </a>

    </div>
  );
}
