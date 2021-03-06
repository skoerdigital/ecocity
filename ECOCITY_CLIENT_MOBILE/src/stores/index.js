import listStore from "./user/store";
import ScooterStore from "./domain/scooterStore";
import ModalStore from "./user/modalStore";
import MapStore from "./user/mapStore";
import RouterStore from "./user/routerStore";
import RentalStore from "./domain/rentalStore";
import ScanStore from "./user/scanStore";
import PaymentStore from "./domain/paymentStore";
import NotificationStore from "./domain/notificationStore";

export default stores = {
  listStore: listStore,
  scooterStore: ScooterStore,
  modalStore: ModalStore,
  mapStore: MapStore,
  routerStore: RouterStore,
  rentalStore: RentalStore,
  scanStore: ScanStore,
  notificationStore: NotificationStore,
  paymentStore: PaymentStore
}
