import { createBigDataDefinitionBuilder } from '@finsoft/blueprint';
import * as v from 'valibot';

export const appPlatformBuilder = createBigDataDefinitionBuilder('sample');
const { defineEntities, defineChoices, defineLinkChoices } = appPlatformBuilder;

export const choices = defineChoices({
  categoryStates: {
    prep: 'Preparation',
    active: 'Active',
    inactive: 'Inactive',
  },

  coordinatorStates: {
    name1: 'ธนชล สมอินสอน',
    name2: 'วิไลพร ใจหมั้น',
    name3: 'ชนุดม โสภากร',
    name4: 'สุนทรี จันทร์สิริพงศ์',
    name5: 'ปราณี นิรงค์บุตร',
    name6: 'วิไลวรรณ วชิรศักดิ์พานิช',
    name7: 'เยาวลักษณ์ ทองก้อน',
    name8: 'สุเพียงพิศต์ แซ่ตัน',
    name9: 'กัลยา วรรธนรียชาติ',
  },

  flying1: {
    airasia1: 'แอร์เอเชีย FD3416 05:10 - 06:20 น.',
    lionair: 'ไลอ้อนแอร์ SL506 06:00 - 07:15 น.',
    nokair1: 'นกแอร์ DD120 06:30 - 07:40 น.',
    airasia2: 'แอร์เอเชีย FD3437 06:50 - 08:00 น.',
  },

  flying2: {
    airasia3: 'แอร์เอเชีย FD3432 17:30 - 18:45 น.',
    nokair2: 'นกแอร์ DD135 18:00 - 19:10 น.',
  },

  paymentchannel: {
    full: 'เต็มจำนวน',
    deposit: 'มัดจำ 500.00 บาท',
    installment: 'ค้างชำระ',
  },

  regionStates: {
    n1: 'นครหลวง 1',
    n2: 'นครหลวง 2',
    n3: 'นครหลวง 3',
    n4: 'นครหลวง 4',
    n5: 'นครหลวง 5',
    n6: 'นครหลวง 6',
    n7: 'นครหลวง 7',
    n8: 'นครหลวง 8',
    n9: 'นครหลวง 9',
    n10: 'นครหลวง 10',
    n11: 'นครหลวง 11',
    n12: 'นครหลวง 12',
    n14: 'นครหลวง 14',
    n15: 'นครหลวง 15',
    n16: 'นครหลวง 16',
    n17: 'นครหลวง 17',
    n18: 'นครหลวง 18',
    n19: 'นครหลวง 19',
    jw: 'ภาคจักรวาล',
    pt51: 'ภูธร 51',
    pt52: 'ภูธร 52',
    pt53: 'ภูธร 53',
    pt54: 'ภูธร 54',
    pt56: 'ภูธร 56',
    pt57: 'ภูธร 57',
    pt58: 'ภูธร 58',
    pt59: 'ภูธร 59',
    dmb: 'กองอบรมสมาธิ (ดอกไม้บาน)',
  },

  sex: {
    male: 'ชาย',
    female: 'หญิง',
  },

  travelStates1: {
    bus: 'รถวัด',
    car: 'ไปเอง',
    airplane: 'เครื่องบิน',
    stay: 'อยู่ต่อรุ่น',
    stayairplane: 'ขึ้นสนามบินเชียงใหม่',
  },

  travelStates2: {
    bus: 'รถวัด',
    car: 'กลับเอง',
    airplane: 'เครื่องบิน',
    stay: 'อยู่ต่อรุ่น',
    stayairplane2: 'ลงสนามบินเชียงใหม่',
  },

  meditationSeat: {
    seat: 'อาสนะ',
    chair: 'เก้าอี้',
  },

  prefix: {
    Mr: 'นาย',
    Mrs: 'นาง',
    Miss: 'นางสาว',
  },

  marita: {
    single: 'โสด',
    married: 'สมรส',
    divorced: 'หย่า',
    widowed: 'หม้าย',
  },

  locations: {
    WPV: 'World Peace Valley (เขาใหญ่)',
    PNW: 'พนาวัฒน์ (เชียงใหม่)',
    HFP: 'สวนป่าหิมวันต์ (ภูเรือ)',
  },

  study: {
    fccode0053: 'กำลังศึกษา',
    fccode0055: 'ธรรมศึกษาตรี',
    fccode0054: 'ธรรมศึกษาเอก',
    fccode0050: 'ธรรมศึกษาโท',
    fccode0052: 'นักธรรมตรี',
    fccode0051: 'นักธรรมเอก',
    fccode0022: 'นักธรรมโท',
    fccode0057: 'ป.กศ.สูง',
    fccode0008: 'ประกาศนียบัตร',
    fccode0001: 'ประถมศึกษา',
    fccode0002: 'ประถมศึกษาปีที่ 1',
    fccode0003: 'ประถมศึกษาปีที่ 2',
    fccode0004: 'ประถมศึกษาปีที่ 3',
    fccode0005: 'ประถมศึกษาปีที่ 4',
    fccode0006: 'ประถมศึกษาปีที่ 5',
    fccode0007: 'ประถมศึกษาปีที่ 6',
    fccode0042: 'ประถมศึกษาปีที่ 7',
    fccode0101: 'ปริญญาตรี',
    fccode0102: 'ปริญญาตรี ปี 1',
    fccode0103: 'ปริญญาตรี ปี 2',
    fccode0104: 'ปริญญาตรี ปี 3',
    fccode0044: 'ปริญญาตรี ปี 4',
    fccode0043: 'ปริญญาเอก',
    fccode0105: 'ปริญญาโท',
    fccode0106: 'ปริญญาโท ปี 1',
    fccode0019: 'ปริญญาโท ปี 2',
    fccode0021: 'ปวช.',
    fccode0020: 'ปวท.',
    fccode0039: 'ปวส.',
    fccode0108: 'พ.ม.(ป.ประโยคครูพิเศษมัธยม)',
    fccode0107: 'มัธยมต้น',
    fccode0027: 'มัธยมปลาย',
    fccode0028: 'มัธยมปีที่ 1',
    fccode0029: 'มัธยมปีที่ 2',
    fccode0030: 'มัธยมปีที่ 3',
    fccode0031: 'มัธยมปีที่ 4',
    fccode0032: 'มัธยมปีที่ 5',
    fccode0033: 'มัธยมปีที่ 6',
    fccode0034: 'มัธยมปีที่ 7',
    fccode0017: 'มัธยมปีที่ 8',
    fccode0038: 'มัธยมศึกษา',
    fccode0037: 'มัธยมศึกษาตอนต้น',
    fccode0009: 'มัธยมศึกษาตอนปลาย',
    fccode0010: 'มัธยมศึกษาปีที่ 1',
    fccode0011: 'มัธยมศึกษาปีที่ 2',
    fccode0012: 'มัธยมศึกษาปีที่ 3',
    fccode0013: 'มัธยมศึกษาปีที่ 4',
    fccode0014: 'มัธยมศึกษาปีที่ 5',
    fccode0015: 'มัธยมศึกษาปีที่ 6',
    fccode0016: 'มัธยมศึกษาปีที่ 7',
    fccode0026: 'มัธยมศึกษาปีที่ 8',
    fccode0025: 'วิชาชีพ',
    fccode0024: 'วิชาชีพชั้นสูง',
    fccode0023: 'อนุปริญญา',
    fccode0018: 'อาชีวศึกษา',
    fccode0056: 'อุดมศึกษา',
    fccode0045: 'เตรียมอุดมศึกษา',
    fccode0046: 'เปรียญธรรม 1-2 ประโยค',
    fccode0047: 'เปรียญธรรม 3 ประโยค',
    fccode0048: 'เปรียญธรรม 4 ประโยค',
    fccode0049: 'เปรียญธรรม 5 ประโยค',
    fccode0099: 'เปรียญธรรม 8 ประโยค',
    fccode0100: 'ไม่ระบุการศึกษา',
  },

  jobposition: {
    lawyer: 'กฎหมาย-ทนาย-ผู้พิพากษา',
    police: 'ข้าราชการตำรวจ',
    military: 'ข้าราชการทหาร',
    civil: 'ข้าราชการพลเรือน',
    teacher: 'ครู-อาจารย์',
    mediumBusiness: 'ค้าขาย/กิจการขนาดกลาง',
    largeBusiness: 'ค้าขาย/กิจการขนาดใหญ่',
    smallBusiness: 'ค้าขายขนาดย่อม',
    freelance: 'ธุรกิจอิสระ',
    student: 'นักเรียน-นักศึกษา',
    nurse: 'พยาบาล',
    househusband: 'พ่อบ้าน',
    dhammakaya: 'มูลนิธิธรรมกาย',
    unemployed: 'รองาน-ว่างงาน',
    stateEnterprise: 'รัฐวิสาหกิจ',
    generalLabor: 'รับจ้างทั่วไป',
    privateEmployee: 'ลูกจ้างเอกชนระดับทั่วไป',
    executiveEmployee: 'ลูกจ้างเอกชนระดับบริหาร-สูง',
    others: 'อื่นๆ',
    farmer: 'เกษตรกร',
    retired: 'เกษียณ',
    doctor: 'แพทย์',
    housewife: 'แม่บ้าน',
    unspecified: 'ไม่ระบุ',
  },

  workplace: {
    athome: 'ที่บ้าน',
    elsewhere: 'ที่อื่นๆ',
  },

  current: {
    affiliation: 'สังกัดภาค',
    notaffiliation: 'ไม่มีสังกัดภาค/กลุ่มใด',
  },

  health: {
    strong: 'แข็งแรง',
    moderatehealth: 'ปานกลาง',
    disease: 'โรคประจำตัว',
  },

  groupA: {
    A: 'A',
    B: 'B',
    C: 'C',
    D: 'D',
    E: 'E',
    F: 'F',
    G: 'G',
    H: 'H',
    I: 'I',
    J: 'J',
    K: 'K',
    L: 'L',
    M: 'M',
    N: 'N',
    O: 'O',
    P: 'P',
    Q: 'Q',
    R: 'R',
    S: 'S',
  },
});

const linkChoices = defineLinkChoices({
  categories: 'category',
  products: 'products',
});

export const data = defineEntities({
  // category
  category: {
    root: [
      {
        model: 'name',
        label: 'Name',
        spec: v.pipe(v.string(), v.nonEmpty(), v.maxLength(15)),
        component: 'text',
      },
      {
        model: 'createdAt',
        label: 'Date Created',
        spec: v.optional(v.pipe(v.string(), v.regex(/^\d{8}$/, "Invalid format, date should be 'YYYYMMDD'"))),
        // spec: v.union([v.optional(v.date()), v.pipe(v.string(), v.transform(dt => new Date(dt)), v.date())]),
        component: 'date',
      },
      {
        model: 'state',
        label: 'State',
        spec: v.pipe(v.string(), v.nonEmpty()),
        component: 'select',
        choices: choices.categoryStates,
      },
    ],
    links: [
      {
        name: 'products',
        component: 'list',
        link2: 'product',
        look4: 'categoryId',
      },
    ],
  },

  // product
  product: {
    root: [
      {
        model: 'name',
        label: 'Name',
        spec: {},
        component: 'text',
      },
      {
        model: 'price',
        label: 'Price',
        spec: {},
        component: 'number',
      },
      {
        model: 'description',
        label: 'Description',
        spec: {},
        component: 'text',
      },
      {
        model: 'categoryId',
        label: 'Category',
        spec: {},
        component: 'link2select',
        link: linkChoices.categories,
      },
    ],
    sub: [
      {
        name: 'code',
        component: 'entry',
        fields: [
          {
            model: 'qrCode',
            label: 'QR Code',
            spec: {},
            component: 'text',
          },
          {
            model: 'upcCode',
            label: 'UPC Code',
            spec: {},
            component: 'text',
          },
        ],
      },
    ],
  },

  // order
  order: {
    root: [
      {
        model: 'customer',
        label: 'Customer Name',
        spec: {},
        component: 'text',
      },
      {
        model: 'orderDate',
        label: 'Order Date',
        spec: {},
        component: 'date',
      },
    ],
    sub: [
      {
        name: 'orderItems',
        component: 'list',
        fields: [
          {
            model: 'productId',
            label: 'Product',
            spec: {},
            component: 'product',
            choices: 'ref:products',
          },
          {
            model: 'quantity',
            label: 'Quantity',
            spec: {},
            component: 'number',
          },
          {
            model: 'unitPrice',
            label: 'Unit Price',
            spec: {},
            component: 'number',
          },
        ],
      },
    ],
  },

  // hostapp
  hostapp: {
    root: [
      {
        model: 'name',
        label: 'Name',
        spec: v.pipe(v.string(), v.nonEmpty(), v.maxLength(15)),
        component: 'text',
      },
      {
        model: 'createdAt',
        label: 'Date Created',
        spec: v.optional(v.pipe(v.string(), v.regex(/^\d{8}$/, "Invalid format, date should be 'YYYYMMDD'"))),
        // spec: v.union([v.optional(v.date()), v.pipe(v.string(), v.transform(dt => new Date(dt)), v.date())]),
        component: 'date',
      },
      {
        model: 'state',
        label: 'State',
        spec: v.pipe(v.string(), v.nonEmpty()),
        component: 'select',
        choices: choices.categoryStates,
      },
    ],
    links: [
      {
        name: 'products',
        component: 'list',
        link2: 'product',
        look4: 'categoryId',
      },
    ],
  },

  // camp
  camp: {
    root: [
      [{
        model: 'generation',
        label: 'รุ่น',
        spec: {},
        component: 'text',
      },
      {
        model: 'name',
        label: 'โครงการปฏิบัติธรรม',
        spec: {},
        component: 'select',
        choices: choices.locations,
      },],
      [{
        model: 'startDate',
        label: 'วันที่เริ่ม',
        spec: {},
        component: 'date',
      },
      {
        model: 'endDate',
        label: 'วันที่สิ้นสุด',
        spec: {},
        component: 'date',
      },],
    ],
    sub: [
      {
        name: 'register',
        component: 'entry',
        fields: [
          {
            model: 'prefix',
            label: 'คำนำหน้าชื่อ',
            spec: {},
            component: 'select',
            choices: choices.prefix,
          },
          {
            model: 'firstname',
            label: 'ชื่อ',
            spec: {},
            component: 'text',
          },
          {
            model: 'surname',
            label: 'นามสกุล',
            spec: {},
            component: 'text',
          },
        ],
      },
      {
        name: 'setgroup',
        component: 'entry',
        fields: [
          {
            model: 'group',
            label: 'กำหนดจำนวนกลุ่ม',
            spec: {},
            component: 'number',
          },
        ],
      },
      {
        name: 'setgrouptutor',
        component: 'entry',
        fields: [
          {
            model: 'group',
            label: 'กำหนดจำนวนกลุ่ม A-S',
            spec: {},
            component: 'select',
            choices: choices.groupA,
          },
        ],
      },
    ]
  },

  // membership
  membership: {
    root: [[
      {
        model: 'rank',
        label: 'ยศ/ตำแหน่ง',
        spec: {},
        component: 'text',
      },
      {
        model: 'prefix',
        label: 'คำนำหน้าชื่อ / Title',
        spec: {},
        component: 'select',
        choices: choices.prefix,
      },
      {
        model: 'firstname',
        label: 'ชื่อ / Name',
        spec: {},
        component: 'text',
      },
      {
        model: 'surname',
        label: 'นามสกุล / LastName',
        spec: {},
        component: 'text',
      },
    ],
    [
      {
        model: 'nickname',
        label: 'ชื่อเล่น / Nickname',
        spec: {},
        component: 'text',
      },
      {
        model: 'sex',
        label: 'เพศ',
        spec: {},
        component: 'select',
        choices: choices.sex,

      },
      {
        model: 'birthdate',
        label: 'วันเกิด',
        spec: {},
        component: 'date',
      },
      {
        model: 'age',
        label: 'อายุ',
        spec: {},
        component: 'text',
      },
      {
        model: 'idline',
        label: 'ไอดีไลน์ / ID Line',
        spec: {},
        component: 'text',
      },
      {
        model: 'phone',
        label: 'เบอร์โทร',
        spec: {},
        component: 'text',
      }
    ],
    [
      {
        model: 'region',
        label: 'ภาค',
        spec: {},
        component: 'select',
        choices: choices.regionStates,
      },
      {
        model: 'coordinator',
        label: 'ผู้ประสานงาน',
        spec: {},
        component: 'select',
        choices: choices.coordinatorStates,
      },
    ],
    {
      model: 'departurestart',
      label: 'การเดินทาง-ขาไป',
      spec: {},
      component: 'radio',
      choices: choices.travelStates1,
    },
    [{
      model: 'vehiclestart',
      label: 'ทะเบียนรถ',
      spec: {},
      component: 'text',
    }, {
      model: 'flyingstart',
      label: 'เที่ยวบิน',
      spec: {},
      component: 'select',
      choices: choices.flying1,
    }
    ],
    [
      {
        model: 'departureend',
        label: 'การเดินทาง-ขากลับ',
        spec: {},
        component: 'radio',
        choices: choices.travelStates2,
      },
    ], [{
      model: 'vehicleend',
      label: 'ทะเบียนรถ',
      spec: {},
      component: 'text',
    }, {
      model: 'flyingend',
      label: 'เที่ยวบิน',
      spec: {},
      component: 'select',
      choices: choices.flying2,
    }
    ], [
      {
        model: 'payment',
        label: 'ชำระ',
        spec: {},
        component: 'radio',
        choices: choices.paymentchannel,
      },
      // {
      //   model: 'amount',
      //   label: 'มัดจำ',
      //   spec: {},
      //   component: 'number',
      // },
    ],
    // จำลองจัดผัง
    [
    {
      model: 'car',
      label: 'ที่นั่งรถ',
      spec: {},
      component: 'text',
    },
    {
      model: 'bed',
      label: 'บ้านพัก',
      spec: {},
      component: 'text',
    },
    {
      model: 'seat',
      label: 'ที่นั่งสมาธิ',
      spec: {},
      component: 'text',
    }
  
  ],
    ],
    sub: [
      {
        name: 'personalinfo',
        component: 'entry',
        fields: [
          {
            model: 'zipcode',
            label: 'รหัสไปรษณีย์',
            spec: {},
            component: 'text',
          }, {
            model: 'province',
            label: 'จังหวัด',
            spec: {},
            component: 'text',
          }, {
            model: 'amphur',
            label: 'อำเภอ',
            spec: {},
            component: 'text',
          }, {
            model: 'district',
            label: 'ตำบล',
            spec: {},
            component: 'text',
          }, {
            model: 'street',
            label: 'ถนน',
            spec: {},
            component: 'text',
          }, {
            model: 'village',
            label: 'หมู่บ้าน',
            spec: {},
            component: 'text',
          }, {
            model: 'alley',
            label: 'ตรอก/ซอย',
            spec: {},
            component: 'text',
          }, {
            model: 'housenumber',
            label: 'บ้านเลขที่',
            spec: {},
            component: 'text',
          },
          {
            model: 'nationality',
            label: 'สัญชาติ',
            spec: {},
            component: 'text',
          },
          {
            model: 'domicile',
            label: 'ภูมิลำเนาจังหวัด',
            spec: {},
            component: 'text',
          },
          {
            model: 'idcard',
            label: 'เลขที่บัตรประชาชน',
            spec: {},
            component: 'text',
          },
          {
            model: 'prefix',
            label: 'สถานภาพ',
            spec: {},
            component: 'select',
            choices: choices.marita,
          },
          {
            model: 'son',
            label: 'บุตรชาย (จำนวนคน)',
            spec: {},
            component: 'text',
          },
          {
            model: 'daughter',
            label: 'บุตรหญิง (จำนวนคน)',
            spec: {},
            component: 'text',
          },
          {
            model: 'education',
            label: 'การศึกษา',
            spec: {},
            component: 'select',
            choices: choices.study,
          },
          {
            model: 'level',
            label: 'ระดับการศึกษา',
            spec: {},
            component: 'text',
          },
          {
            model: 'faculty/branch',
            label: 'คณะ/สาขา',
            spec: {},
            component: 'text',
          },
          {
            model: 'university',
            label: 'สถาบัน',
            spec: {},
            component: 'text',
          },
          {
            model: 'company',
            label: 'ชื่อหน่วยงาน ร้าน/บริษัท',
            spec: {},
            component: 'text',
          },
          {
            model: 'job',
            label: 'ตำแหน่งงาน',
            spec: {},
            component: 'select',
            choices: choices.jobposition,
          },
          {
            model: 'businesstype',
            label: 'ประเภทธุรกิจ',
            spec: {},
            component: 'text',
          },
          {
            model: 'responsible',
            label: 'รับผิดชอบด้าน',
            spec: {},
            component: 'text',
          },
          {
            model: 'workplacein',
            label: 'ที่ทำงาน',
            spec: {},
            component: 'select',
            choices: choices.workplace,
          },
          {
            model: 'workplacefrom',
            label: 'ที่อยู่ที่ทำงาน',
            spec: {},
            component: 'text',
          },
          {
            model: 'phonecompany',
            label: 'เบอร์โทรหน่วยงาน',
            spec: {},
            component: 'text',
          },
          {
            model: 'oldjob',
            label: 'อดีต เคยทำงานในตำแหน่ง',
            spec: {},
            component: 'text',
          },
          {
            model: 'oldcompany',
            label: 'หน่วยงาน',
            spec: {},
            component: 'text',
          },
          {
            model: 'expertise',
            label: 'มีความชำนาญหรือถนัดในด้าน',
            spec: {},
            component: 'text',
          },
          {
            model: 'special',
            label: 'ความสามารถพิเศษหรือความถนัดที่สามารถช่วยงานพระพุทธศาสนาได้',
            spec: {},
            component: 'text',
          },
          {
            model: 'firsttimetemple',
            label: 'เข้าวัดครั้งแรกเมื่อ (พ.ศ.)',
            spec: {},
            component: 'text',
          },

          {
            model: 'current',
            label: 'ปัจจุบัน',
            spec: {},
            component: 'select',
            choices: choices.current,
          },
          {
            model: 'addcurrent',
            label: 'สังกัดภาค',
            spec: {},
            component: 'text',
          },
          {
            model: 'province/district',
            label: 'จังหวัด/เขต',
            spec: {},
            component: 'text',
          },
          {
            model: 'health',
            label: 'สุขภาพ',
            spec: {},
            component: 'select',
            choices: choices.health,
          },

          {
            model: 'firstkanlaya',
            label: 'กัลยาณมิตรคนแรก',
            spec: {},
            component: 'text',
          },
          {
            model: 'relationship',
            label: 'มีความสัมพันธ์เป็น',
            spec: {},
            component: 'text',
          },
          {
            model: 'firstpractice',
            label: 'ปฏิบัติธรรมครั้งแรกเมื่อ (พ.ศ.)',
            spec: {},
            component: 'text',
          },
          {
            model: 'generation',
            label: 'รุ่นที่',
            spec: {},
            component: 'text',
          },

          {
            model: 'place',
            label: 'สถานที่',
            spec: {},
            component: 'text',
          },
          {
            model: 'howmanytimes',
            label: 'ครั้งนี้มาเป็นครั้งที่',
            spec: {},
            component: 'text',
          },
          {
            model: 'invitefrom',
            label: 'ผู้ชักชวนหรือทราบข่าวจาก',
            spec: {},
            component: 'text',
          },
          {
            model: 'character',
            label: 'อุปนิสัยที่ดี',
            spec: {},
            component: 'text',
          },
          {
            model: 'adjusted',
            label: 'อุปนิสัยที่ต้องปรับปรุง',
            spec: {},
            component: 'text',
          },
          {
            model: 'motto',
            label: 'คติธรรมประจำใจ',
            spec: {},
            component: 'text',
          },
          {
            model: 'lifegoals',
            label: 'เป้าหมายชีวิต',
            spec: {},
            component: 'text',
          },
        ],
      }
    ],
  },

  mentor: {
    root: [
      {
        model: 'fname',
        label: 'ชื่อ',
        spec: {},
        component: 'text',
      },
      {
        model: 'lname',
        label: 'สกุล',
        spec: {},
        component: 'text',
      },
      {
        model: 'nickname',
        label: 'ชื่อเล่น',
        spec: {},
        component: 'text',
      },
      {
        model: 'age',
        label: 'อายุ',
        spec: {},
        component: 'text',
      },
    ],
    sub: [
      {
        name: 'code',
        component: 'entry',
        fields: [
          {
            model: 'qrCode',
            label: 'QR Code',
            spec: {},
            component: 'text',
          },
          {
            model: 'upcCode',
            label: 'UPC Code',
            spec: {},
            component: 'text',
          },
        ],
      },
    ],
  },

  coordinator: {
    root: [
      {
        model: 'fname',
        label: 'ชื่อ',
        spec: {},
        component: 'text',
      },
      {
        model: 'lname',
        label: 'สกุล',
        spec: {},
        component: 'text',
      },
      {
        model: 'nickname',
        label: 'ชื่อเล่น',
        spec: {},
        component: 'text',
      },     
      {
        model: 'age',
        label: 'อายุ',
        spec: {},
        component: 'text',
      },
      {
        model: 'zone',
        label: 'ภาค',
        spec: {},
        component: 'select',
        choices: choices.regionStates,
      },
    ],
    sub: [
      {
        name: 'code',
        component: 'entry',
        fields: [
          {
            model: 'qrCode',
            label: 'QR Code',
            spec: {},
            component: 'text',
          },
          {
            model: 'upcCode',
            label: 'UPC Code',
            spec: {},
            component: 'text',
          },
        ],
      },
    ],
  },
});
