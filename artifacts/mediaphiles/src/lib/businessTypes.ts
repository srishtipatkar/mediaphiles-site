export type BusinessType =
  | "hotel"
  | "resort"
  | "boutique_hotel"
  | "homestay"
  | "villa"
  | "hostel"
  | "cafe"
  | "restaurant"
  | "travel_agency"
  | "other_hospitality";

export const BUSINESS_TYPE_OPTIONS: { value: BusinessType; label: string }[] = [
  { value: "hotel", label: "Hotel" },
  { value: "resort", label: "Resort" },
  { value: "boutique_hotel", label: "Boutique Hotel" },
  { value: "homestay", label: "Homestay" },
  { value: "villa", label: "Villa" },
  { value: "hostel", label: "Hostel" },
  { value: "cafe", label: "Cafe" },
  { value: "restaurant", label: "Restaurant" },
  { value: "travel_agency", label: "Travel Agency" },
  { value: "other_hospitality", label: "Other Hospitality" },
];
