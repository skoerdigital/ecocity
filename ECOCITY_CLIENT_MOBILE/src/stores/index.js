import listStore from "./user/store";
import ScooterStore from "./domain/scooterStore";
import ModalStore from "./user/modalStore";
import MapStore from "./user/mapStore";
import RouterStore from "./user/routerStore";
import RentalStore from "./domain/rentalStore";
import ScanStore from "./user/scanStore";

export default stores = {
  listStore: listStore,
  scooterStore: ScooterStore,
  modalStore: ModalStore,
  mapStore: MapStore,
  routerStore: RouterStore,
  rentalStore: RentalStore,
  scanStore: ScanStore
}
