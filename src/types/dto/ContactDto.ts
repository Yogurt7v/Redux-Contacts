export interface ContactDto {
  id: string | never;
  /** телефон */
  phone: string
  /** имя */
  name: string
  /** дата рождения */
  birthday: string
  /** адрес */
  address: string
  /** фото */
  photo: string
}
