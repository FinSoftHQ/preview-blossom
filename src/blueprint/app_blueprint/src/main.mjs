import {
  choices as specChoices,
  data as _data,
  appPlatformBuilder,
} from './dataspace.mjs';

const { defineAppModules, defineSteps } = appPlatformBuilder;

export const choices = specChoices;
export const data = {
  category: _data.category,
  product: _data.product,
  order: _data.order,
  hostapp: _data.hostapp,
  camp: _data.camp,
  membership: _data.membership,
  register: _data.membership,
  mentor: _data.mentor,
  coordinator: _data.coordinator,
};

const steps = defineSteps({
  rootconfirm: {
    root: 'Information',
    confirm: 'Confirmation',
  },
  editconfirm: ['edit', 'confirm'],
  registerconfirm: {
    root: 'ลงทะเบียนชื่อ',
    registeredName: 'ลงทะเบียนชื่อ',
    travel: 'การเดินทาง',
    edittravel: 'ข้อมูลการเดินทาง',
    confirm: 'ยืนยันข้อมูล',
  },
  mobile: {
    root: 'ลงทะเบียนชื่อ',
    confirm: 'ยืนยันข้อมูล',
  },
  membership: {
    root: 'ลงทะเบียนชื่อ',
    // travel: 'การเดินทาง',โ
    confirm: 'ยืนยันข้อมูล',
  },
  addpersonconfirm: {
    root: 'กรอกข้อมูลส่วนตัว',
    // address: 'ที่อยู่',
    // other: 'คำขออื่นๆ',
    confirm: 'ยืนยันข้อมูล',
  },
  setcamp: {
    root: 'กำหนดรุ่น',
    confirm: 'จำนวนรุ่น',
  },
  setcampspecial: {
    special: 'กำหนดรุ่น',
    confirmspecial: 'ยืนยันข้อมูล',
  },
  setgroup: {
    managegroup: 'กำหนดกลุ่ม',
    editgroup: 'จัดกลุ่ม',
  },
  setgrouptutor: {
    managegrouptutor: 'กำหนดกลุ่ม',
    editgrouptutor: 'จัดกลุ่ม',
  },
  setseat: {
    manageseat: 'กำหนดผัง',
    editseat: 'จัดที่นั่ง',
  },
});

export const appModules = defineAppModules({
  // categories
  category: {
    label: 'Category',
    list: {
      root: data.category,
      closed: data.category,
    },
    create: {
      root: {
        entity: data.category,
        post: true,
        role: 'stepedit',
        steps: steps.rootconfirm,
      },
      confirm: {
        entity: data.category,
        post: true,
        role: 'stepconfirm',
        steps: steps.rootconfirm,
      },
    },
    each: {
      root: {
        entity: data.category,
        actions: ['Edit'],
      },
      edit: {
        entity: data.category,
        post: true,
        role: 'edit',
      },
      close: {
        entity: data.category,
        role: 'confirm',
      },
    },
  },

  // products
  products: {
    label: 'Products',
    list: {
      root: data.product,
      closed: data.product,
    },
    create: {
      root: {
        entity: data.product,
        post: true,
      },
    },
    each: {
      root: {
        entity: data.product,
        actions: [
          'Code',
          {
            label: 'Edit',
            to: { page: 'edit' },
          },
        ],
      },
      edit: {
        entity: data.product,
        post: true,
        role: 'edit',
      },
      code: {
        entity: data.product,
        subName: 'code',
      },
      close: {
        entity: data.product,
        role: 'confirm',
      },
    },
  },

  // posts
  posts: {
    label: 'Category',
    dataPath: 'category',
    icon: 'i-heroicons-arrow-right-circle',
    list: {
      root: data.category,
      closed: data.category,
    },
    create: {
      root: {
        entity: data.category,
        post: '..',
        role: 'stepedit',
      },
      confirm: {
        entity: data.category,
        post: true,
        role: 'stepconfirm',
      },
      steps: {
        entity: data.category,
        role: 'steps',
      },
    },
    each: {
      root: data.category,
      edit: {
        entity: data.category,
        post: '..',
        get: '..',
        role: 'edit',
      },
      close: {
        entity: data.category,
        role: 'confirm',
      },
    },
  },

  // เมนูมือถือ
  hostapp: {
    label: 'HostApp',
    dataPath: 'membership',
    list: {
      root: {
        entity: data.membership,
        post: true,
        role: 'menu',
        actions: [{
          title: 'ข้อมูลสวนตัว',
          to: { page: 'memberinfo' },
          icon: 'i-mdi-user',
        },{
          title: 'ค่ายปฎิบัติธรรม',
          to: { page: 'dharmacamp' },
          icon: 'i-mdi-table-search',
        },{
          title: 'ค่ายที่ลงทะเบียน',
          to: { page: 'registered' },
          icon: 'i-mdi-calendar-cursor',
        },{
          title: 'ชำระเงิน',
          to: { page: 'payment' },
          icon: 'i-mdi-credit-card',
        },],
      },
      memberinfo: data.membership,
      dharmacamp: data.membership,
      registered: data.membership,
      payment: data.membership,
      closed: data.membership,
    },
    create: {
      root: {
        entity: data.membership,
        post: true,
        role: 'stepedit',
        steps: steps.rootconfirm,
      },
      confirm: {
        entity: data.membership,
        post: true,
        role: 'stepconfirm',
        steps: steps.rootconfirm,
      },
    },
    each: {
      root: {
        entity: data.membership,
        actions: ['Edit'],
      },
      edit: {
        entity: data.membership,
        post: true,
        role: 'edit',
      },
      close: {
        entity: data.membership,
        role: 'confirm',
      },
    },
  },

  // สร้างรุ่นปฎิบัติธรรม
  camp: {
    label: 'โครงการปฎิบัติธรรม',
    list: {
      root: data.camp,
      completed: data.camp,
      closed: data.camp,
    },
    create: {
      root: {
        entity: data.camp,
        post: true,
        role: 'stepedit',
        steps: steps.setcamp,
      },
      confirm: {
        entity: data.camp,
        post: true,
        role: 'stepconfirm',
        steps: steps.setcamp,
      },
    },
    each: {
      root: {
        entity: data.camp,
        actions: [{
          label: 'แก้ไขรุ่นปฎิบัติธรรม',
          to: { page: 'edit' },
        },
        {
          label: 'ลงทะเบียนเจ้าภาพ',
          to: { name: 'membership.create.root' },
        },
        {
          label: 'เอกสาร',
          to: { page: 'document' },
        },
        {
          label: 'จัดที่นั่งปฎิบัติธรรม',
          to: { page: 'manageseat' },
        }, 
        {
          label: 'จัดผังรถ',
          to: { page: 'managecar' },
        }, 
        {
          label: 'จัดผังที่พัก',
          to: { page: 'managebed' },
        },
        {
          label: 'จัดกลุ่มหลัก',
          to: { page: 'managegroup' },
        },
        {
          label: 'จัดกลุ่มติว',
          to: { page: 'managegrouptutor' },
        },
        {
          label: 'จัดเจ้าภาพผู้ใหญ่',
          to: { page: 'managegroupsenior' },
        },
        ],
      },
      edit: {
        entity: data.camp,
        post: true,
        role: 'edit',
      },
      document: {
        entity: data.camp,
        post: true,
        role: 'document',
      },
      managecar: {
        entity: data.camp,
        post: true,
        role: 'addcar',
      },
      managebed: {
        entity: data.camp,
        post: true,
        role: 'addbed',
      },
      webprint: {
        entity: data.camp,
        role: 'webprint',
      },
      superiortbprint: {
        entity: data.camp,
        role: 'webprint',        
      },
      superiorphtprint: {
        entity: data.camp,
        role: 'webprint',
      },
      returnprintdoc: {
        entity: data.camp,
        role: 'webprint',
      },
      phonecheckprintdoc: {
        entity: data.camp,
        role: 'webprint',
      },
      nametagprint: {
        entity: data.camp,
        role: 'webprint',
      },
      evaluationformprint: {
        entity: data.camp,
        role: 'print',
      },
      pdfme: {
        entity: data.camp,
        role: 'pdfme',
      },
      // เพิ่มมาใหม่
      editgroup: {
        entity: data.camp,
        post: '.',
        steps: steps.setgroup,
      },
      managegroup: {
        entity: data.camp,
        post: true,
        role: 'stepedit',
        steps: steps.setgroup,
        subName: 'setgroup',
      },
      groupreport: {
        entity: data.camp,
        post: true,
        role: 'webprint',
      },
      editgrouptutor: {
        entity: data.camp,
        post: '.',
        steps: steps.setgroup,
      },
      managegrouptutor: {
        entity: data.camp,
        post: true,
        role: 'stepedit',
        steps: steps.setgrouptutor,
        subName: 'setgroup',
      },
      groupreporttutor: {
        entity: data.camp,
        post: true,
        role: 'webprint',
      },
      managegroupsenior: {
        entity: data.camp,
        post: true,
        steps: steps.setgroup,
      },
      groupreportsenior: {
        entity: data.camp,
        post: true,
        role: 'webprint',
      },
      editseat: {
        entity: data.camp,
        post: '.',
        steps: steps.setseat,
      },
      manageseat: {
        entity: data.camp,
        post: true,
        role: 'stepedit',
        steps: steps.setseat,
      },
    },
  },

  // เจ้าหน้าที่ลงทะเบียนค่ายปฎิบัติธรรม
  membership: {
    label: 'ลงทะเบียนเจ้าภาพ',
    list: {
      root: data.membership,
      closed: data.membership,
    },
    create: {
      root: {
        entity: data.membership,
        post: true,
        role: 'stepedit',
        steps: steps.membership,
      },
      confirm: {
        entity: data.membership,
        post: true,
        role: 'stepconfirm',
        steps: steps.membership,
      },
    },
    each: {
      root: {
        entity: data.membership,
        actions: [
          {
            label: 'แก้ไขข้อมูล',
            to: { page: 'edit' },
          },
          {
            label: 'กรอกข้อมูลส่วนตัว',
            to: { page: 'personalinfo' },
          },
        ],
      },
      edit: {
        entity: data.membership,
        post: true,
        role: 'edit',
      },
      makepayment: {
        entity: data.membership,
        post: true,
        role: 'payment',
      },
      address: {
        entity: data.membership,
        post: true,
        role: 'edit',
        subName: 'address',
      },
      personalinfo: {
        entity: data.membership,
        post: true,
        role: 'edit',
        subName: 'personalinfo',
      },
      close: {
        entity: data.membership,
        role: 'confirm',
      },
    },
  },

  //ลงทะเบียนค่ายปฎิบัติธรรม
  register: {
    label: 'ลงทะเบียนค่ายปฎิบัติธรรม',
    dataPath: 'membership',
    list: {
      root: {
        entity: data.membership,
        role: 'menulist',
      },
      closed: data.membership,
    },
    create: {
      root: {
        entity: data.membership,
        post: true,
        role: 'stepedit',
        steps: steps.mobile,
      },
      // scanqr: {
      //   entity: data.membership,
      //   post: true,
      //   role: 'stepscanqr',
      //   steps: steps.mobile,
      // },
      confirm: {
        entity: data.membership,
        post: true,
        role: 'stepconfirm',
        steps: steps.mobile,
      },
    },
    each: {
      root: {
        entity: data.membership,
        role: 'notisuccess',
      },
      edit: {
        entity: data.membership,
        post: true,
        role: 'edit',
      },
      makepayment: {
        entity: data.membership,
        post: true,
        role: 'payment',
      },
      address: {
        entity: data.membership,
        post: true,
        role: 'edit',
        subName: 'address',
      },
      personalinfo: {
        entity: data.membership,
        post: true,
        role: 'edit',
        subName: 'personalinfo',
      },
      close: {
        entity: data.membership,
        role: 'qrpayment',
      },
    },
  },

  //app เจ้าหน้าที่
  officerapp: {
    label: 'แอพเจ้าหน้าที่',
    list: {
      root: data.membership,
      closed: data.membership,
    },
    create: {
      root: {
        entity: data.membership,
        post: true,
        role: 'stepedit',
        steps: steps.rootconfirm,
      },
      confirm: {
        entity: data.membership,
        post: true,
        role: 'stepconfirm',
        steps: steps.rootconfirm,
      },
    },
    each: {
      root: {
        entity: data.membership,
        actions: [{
          label: 'ถ่ายรูป',
          to: { page: 'mobilephoto' },
        },
        {
          label: 'ดูภาพถ่าย',
          to: { page: 'previewphoto' },
        }],
      },
      mobilephoto: {
        entity: data.membership,
        post: true,
        role: 'takephoto',
        subName: 'photo',
      },
      previewphoto: {
        entity: data.membership,
        post: true,
        role: 'previewphoto',

      },
      close: {
        entity: data.membership,
        role: 'confirm',
      },
    },
  },

  mentor: {
    label: 'พี่เลี้ยง',
    list: {
      root: data.mentor,
      closed: data.mentor,
    },
    create: {
      root: {
        entity: data.mentor,
        post: true,
        role: 'stepedit',
        steps: steps.rootconfirm,
      },
      confirm: {
        entity: data.mentor,
        post: true,
        role: 'stepconfirm',
        steps: steps.rootconfirm,
      },
    },
    each: {
      root: {
        entity: data.mentor,
        actions: ['Edit'],
      },
      edit: {
        entity: data.mentor,
        post: true,
        role: 'edit',
      },
      close: {
        entity: data.mentor,
        role: 'confirm',
      },
    },
  },

  coordinator: {
    label: 'ผู้ประสานงาน',
    list: {
      root: data.coordinator,
      closed: data.coordinator,
    },
    create: {
      root: {
        entity: data.coordinator,
        post: true,
        role: 'stepedit',
        steps: steps.rootconfirm,
      },
      confirm: {
        entity: data.coordinator,
        post: true,
        role: 'stepconfirm',
        steps: steps.rootconfirm,
      },
    },
    each: {
      root: {
        entity: data.coordinator,
        actions: ['Edit'],
      },
      edit: {
        entity: data.coordinator,
        post: true,
        role: 'edit',
      },
      close: {
        entity: data.coordinator,
        role: 'confirm',
      },
    },
  },
});
