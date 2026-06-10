export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  sellerName: string;
  whatsappNumber: string; // international format without '+' or spaces, e.g. '62812345678'
  category: string;
}

export interface VillageStats {
  jiwa: number;
  kk: number;
  rt: number;
  rw: number;
}

export interface StatCardData {
  value: string;
  label: string;
  subtext: string;
  icon: React.ReactNode;
}

export interface ApiResponse {
  data: Product[];
  status: "success" | "error";
  message?: string;
}
