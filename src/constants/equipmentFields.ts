import { FieldDefinition } from '../types/fieldDefinitions';
import { Equipment } from '../types';

export const EQUIPMENT_FIELDS: FieldDefinition<keyof Equipment>[] = [
  {
    key: 'camera',
    label: 'Фотоапарат/и',
    infoId: 'equipmentcamera',
    info: 'Въведете общата стойност на всички фотоапарати / камери, които притежавате. Смятайте ги по цената им на закупуване.',
  },
  {
    key: 'lens',
    label: 'Обектив/и',
    infoId: 'equipmentlens',
    info: 'Въведете общата стойност на всички обективи, които притежавате. Смятайте ги по цената им на закупуване.',
  },
  {
    key: 'cards',
    label: 'Карти памет',
    infoId: '',
    info: '',
  },
  {
    key: 'battery',
    label: 'Батерии',
    infoId: 'equipmentbattery',
    info: 'Тук сметнете всички резервни батерии за фотоапаратите си, батерии АА и др.',
  },
  {
    key: 'bag',
    label: 'Фотографска чанта',
    infoId: '',
    info: '',
  },
  {
    key: 'tripod',
    label: 'Статив/и',
    infoId: '',
    info: '',
  },
  {
    key: 'filter',
    label: 'Филтри',
    infoId: '',
    info: '',
  },
  {
    key: 'studioLights',
    label: 'Студийни светкавици',
    infoId: 'equipmentstudiolights',
    info: 'Това поле е предвидено за светкавици, които сте закупили за ползване в студио. По-долу има друго поле за светкавици, което е предвидено за мобилни светкавици.',
  },
  {
    key: 'lightStands',
    label: 'Стативи за осветление',
    infoId: '',
    info: '',
  },
  {
    key: 'lightModifiers',
    label: 'Модификатори и др. аксесоари за осветление',
    infoId: '',
    info: '',
  },
  {
    key: 'flash',
    label: 'Светкавици',
    infoId: '',
    info: '',
  },
  {
    key: 'hardDisk',
    label: 'Харддиск/ове',
    infoId: '',
    info: '',
  },
  {
    key: 'computer',
    label: 'Компютър/компютри',
    infoId: '',
    info: '',
  },
  {
    key: 'software',
    label: 'Софтуер',
    infoId: 'equipmentsoftware',
    info: 'Понеже основният фотографски софтуер, който повечето фотографи ползват е на абонаментен принцип, тук въведете сумата на годишния абонамент',
  },
  {
    key: 'other',
    label: 'Други',
    infoId: 'equipmentother',
    info: 'По-горе сме сложили полета за основните неща, които смятаме, че повечето фотографи имат. Фотографската техника и екипировка е толкова разнообразна, че със сигурност вие може да имате нещо, което не влиза в никоя от горните категории, като дрон, спортна екипировка, която ползвате за outdoor фотография и много други. Помислете и вкарайте в това поле всичката останала техника и екипировка, която ви е нужна, за да правите фотографията, която практикувате.',
  },
] as const;

