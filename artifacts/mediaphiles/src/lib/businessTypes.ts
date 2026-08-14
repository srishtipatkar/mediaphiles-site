// Must stay in sync with the "Property Tye" dropdown's actual options on the
// live Google Form — it enforces server-side validation and silently 400s
// (invisible to the no-cors fetch) if a value doesn't match one of these exactly.
export type BusinessType =
  | "hotel"
  | "resort"
  | "boutique_hotel"
  | "homestay"
  | "villa"
  | "hostel"
  | "cafe"
  | "restaurant"
  | "travel_agency";

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
];
