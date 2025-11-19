import { Game, Order, Wallet, UserProfile } from '@/types';
import { Gamepad2, Monitor, Ghost, Sword, Zap, Star } from 'lucide-react';

export const GAMES: Game[] = [
  {
    id: 1,
    title: "Cyber Void",
    category: "Action",
    price: 59.99,
    rating: 4.8,
    image: "linear-gradient(45deg, #111, #333)",
    description: "ຕໍ່ສູ້ໃນໂລກອະນາຄົດທີ່ມືດມົນ ແລະ ເຕັມໄປດ້ວຍຄວາມລັບ.",
    longDescription: "Cyber Void ນຳພາທ່ານເຂົ້າສູ່ປີ 2077 ທີ່ໂລກຖືກຄວບຄຸມໂດຍບໍລິສັດຍັກໃຫຍ່. ທ່ານຈະໄດ້ຮັບບົດເປັນແຮັກເກີມືໜຶ່ງທີ່ຕ້ອງເປີດໂປງຄວາມລັບດຳມືດ. ລະບົບການຕໍ່ສູ້ທີ່ໄວວາ ປະສົມປະສານກັບການລັກລອບ ແລະ ການແຮັກລະບົບທີ່ຊັບຊ້ອນ.",
    specs: { cpu: "Core i7", ram: "16GB", gpu: "RTX 3060" },
    icon: <Zap size={48} className="text-white" />
  },
  {
    id: 2,
    title: "Shadows of Vientiane",
    category: "RPG",
    price: 45.00,
    rating: 4.9,
    image: "linear-gradient(to bottom, #000, #222)",
    description: "ຜຈົນໄພໃນນະຄອນຫຼວງວຽງຈັນທີ່ຖືກປົກຄຸມດ້ວຍເງົາປີສາດ.",
    longDescription: "ນະຄອນຫຼວງວຽງຈັນໃນມິຕິຄູ່ຂະໜານທີ່ເຕັມໄປດ້ວຍເວດມົນບູຮານ ແລະ ເຕັກໂນໂລຊີ. ສຳຫຼວດວັດວາອາຮາມທີ່ຖືກສາບ ແລະ ຕໍ່ສູ້ກັບສັດຕູໃນຕຳນານລາວທີ່ຖືກຕີຄວາມໝາຍໃໝ່ໃນຮູບແບບ Dark Fantasy.",
    specs: { cpu: "Ryzen 5", ram: "8GB", gpu: "GTX 1660" },
    icon: <Ghost size={48} className="text-white" />
  },
  {
    id: 3,
    title: "White Noise",
    category: "Horror",
    price: 29.99,
    rating: 4.5,
    image: "radial-gradient(circle, #333, #000)",
    description: "ຄວາມງຽບຄືສັດຕູທີ່ຮ້າຍກາດທີ່ສຸດໃນສະຖານີອາວະກາດຮ້າງ.",
    longDescription: "ເມື່ອສຽງດຽວທີ່ທ່ານໄດ້ຍິນຄືສຽງຫາຍໃຈຂອງໂຕເອງ. White Noise ເປັນເກມ Horror ທີ່ໃຊ້ລະບົບສຽງ 3D ເພື່ອສ້າງບັນຍາກາດທີ່ໜ້າຢ້ານກົວທີ່ສຸດ. ທ່ານຕ້ອງໜີຈາກສິ່ງມີຊີວິດທີ່ບໍ່ສາມາດເບິ່ງເຫັນໄດ້ດ້ວຍຕາເປົ່າ.",
    specs: { cpu: "Core i5", ram: "8GB", gpu: "RTX 2060" },
    icon: <Monitor size={48} className="text-white" />
  },
  {
    id: 4,
    title: "Blade Ronin",
    category: "Action",
    price: 39.99,
    rating: 4.7,
    image: "linear-gradient(135deg, #222, #555)",
    description: "ວິຖີແຫ່ງດາບໃນຍຸກສະໄໝທີ່ບໍ່ມີກົດເກນ.",
    longDescription: "ສວມບົດບາດເປັນຊາມູໄຮຄົນສຸດທ້າຍໃນຍຸກ Cyberpunk. ການຕໍ່ສູ້ດ້ວຍດາບທີ່ເນັ້ນຄວາມແມ່ນຍຳ ແລະ ການຕັດສິນໃຈໃນສ່ຽວວິນາທີ. ທຸກການໂຈມຕີມີຄວາມໝາຍ ແລະ ຄວາມຜິດພາດພຽງຄັ້ງດຽວອາດໝາຍເຖິງຄວາມຕາຍ.",
    specs: { cpu: "Core i7", ram: "16GB", gpu: "RTX 3070" },
    icon: <Sword size={48} className="text-white" />
  },
  {
    id: 5,
    title: "Chess Master 3000",
    category: "Strategy",
    price: 0,
    rating: 4.2,
    image: "conic-gradient(from 90deg, #111, #444)",
    description: "ເກມໝາກຮຸກຄລາສສິກດ້ວຍລະບົບ AI ອັດສະລິຍະ.",
    longDescription: "ທ້າທາຍສະໝອງຂອງທ່ານກັບ AI ທີ່ຖືກພັດທະນາດ້ວຍ Deep Learning. ຮອງຮັບໂໝດການຫຼິ້ນແບບ Classic, Blitz ແລະ Puzzle ແກ້ໄຂໂຈດໝາກຮຸກ.",
    specs: { cpu: "Core i3", ram: "4GB", gpu: "Integrated" },
    icon: <Gamepad2 size={48} className="text-white" />
  },
  {
    id: 6,
    title: "Echo Protocol",
    category: "Sci-Fi",
    price: 69.99,
    rating: 4.9,
    image: "repeating-linear-gradient(45deg, #000, #000 10px, #222 10px, #222 20px)",
    description: "ພາລະກິດກູ້ໂລກຄັ້ງສຸດທ້າຍກ່ອນລະບົບຈະປິດໂຕລົງ.",
    longDescription: "Echo Protocol ເປັນເກມ Sci-Fi Shooter ທີ່ເນັ້ນເນື້ອເລື່ອງ ແລະ ການຮ່ວມມື (Co-op). ທ່ານ ແລະ ທີມງານຕ້ອງເຂົ້າໄປໃນໃຈກາງຂອງດວງຈັນເພື່ອຢຸດຢັ້ງລະບົບ AI ທີ່ຈະທຳລາຍໂລກ.",
    specs: { cpu: "Core i9", ram: "32GB", gpu: "RTX 4080" },
    icon: <Zap size={48} className="text-white" />
  },
  {
    id: 7,
    title: "Noir Racer",
    category: "Racing",
    price: 24.99,
    rating: 4.3,
    image: "repeating-linear-gradient(90deg, #111 0px, #111 20px, #222 20px, #222 40px)",
    description: "ແຂ່ງລົດຄວາມໄວສູງໃນສະພາບແວດລ້ອມຂາວ-ດຳ.",
    longDescription: "ຊິ່ງລົດໃນເມືອງທີ່ບໍ່ມີແສງຕາເວັນ. Noir Racer ໃຊ້ກຣາບຟິກແບບ Film Noir ທີ່ເປັນເອກະລັກ ພ້ອມກັບເພງປະກອບແນວ Jazz-Fusion ທີ່ເລັ່ງລ້າວ.",
    specs: { cpu: "Ryzen 7", ram: "16GB", gpu: "RX 6700" },
    icon: <Gamepad2 size={48} className="text-white" />
  },
  {
    id: 8,
    title: "Code Breaker",
    category: "Strategy",
    price: 14.99,
    rating: 4.6,
    image: "linear-gradient(0deg, #050505 25%, #333 100%)",
    description: "ແກ້ໄຂປິດສະໜາທີ່ຊັບຊ້ອນເພື່ອປົດລັອກຄວາມລັບ.",
    longDescription: "ເກມປິດສະໜາສຳລັບໂປຣແກຣມເມີ ແລະ ຜູ້ທີ່ມັກການຄິດວິເຄາະ. ທ່ານຕ້ອງຂຽນໂຄດ ແລະ ແກ້ໄຂ Algorithm ເພື່ອຜ່ານດ່ານຕ່າງໆ.",
    specs: { cpu: "Core i5", ram: "8GB", gpu: "GTX 1060" },
    icon: <Monitor size={48} className="text-white" />
  }
];

export const CATEGORIES = ["All", "Action", "RPG", "Strategy", "Horror", "Sci-Fi", "Racing"];

export const INITIAL_ORDERS: Order[] = [
  {
    id: "ORD-2024-001",
    date: "15/10/2024",
    total: 14.99,
    status: "Completed",
    tracking: [
      { step: "Ordered", date: "15/10/2024 10:00", done: true },
      { step: "Processing", date: "15/10/2024 14:30", done: true },
      { step: "Shipped", date: "16/10/2024 09:00", done: true },
      { step: "Delivered", date: "17/10/2024 11:20", done: true }
    ],
    items: [GAMES[7]] // Code Breaker
  }
];

export const INITIAL_WALLET: Wallet = {
  balance: 125.50,
  transactions: [
    { id: "TX-999", type: "Deposit", amount: 50.00, date: "18/11/2025", status: "Completed" },
    { id: "TX-998", type: "Purchase", amount: -14.99, date: "15/10/2024", status: "Completed" },
    { id: "TX-997", type: "Deposit", amount: 100.00, date: "01/10/2024", status: "Completed" }
  ]
};

export const INITIAL_PROFILE: UserProfile = {
  name: "Player One",
  email: "player1@blackmarket.la",
  joinDate: "Jan 2024",
  gamesOwned: 12,
  totalSpent: 349.50
};

