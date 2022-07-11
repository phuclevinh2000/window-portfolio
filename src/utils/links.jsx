import { IoBarChartSharp } from 'react-icons/io5';
import { MdQueryStats } from 'react-icons/md';
import { FaWpforms } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';

const links = [
  { id: 1, text: 'about me', path: '/', icon: <IoBarChartSharp /> },
  { id: 2, text: 'my work', path: 'my-work', icon: <MdQueryStats /> },
  { id: 3, text: 'skills', path: 'skills', icon: <FaWpforms /> },
  { id: 4, text: 'hobby', path: 'hobby', icon: <ImProfile /> },
];

export default links;
