import { MailIcon } from '@heroicons/react/outline';
import DeleteButton from '../DeleteButton';
import UpdateButton from '../UpdateButton';

/* This example requires Tailwind CSS v2.0+ */
const items = [
  { id: 1, name: 'Daniel Churel', description: 'Cidadão acidentado' },
  { id: 2, description: 'lalala' },
  { id: 3, description: 'lalala' },
  { id: 4, description: 'lalala' },
  { id: 5, description: 'lalala' },
  // More items...
];

export default function OccurenceList() {
  return (
    <div className="bg-gray-200">
      <ul role="list" className="divide-y divide-gray-200">
        {items.map((item) => (
          <li key={item.id} className="py-4 flex justify-around items-center">
            {/* Your content */}
            {/* <p>
              Nº: {item.id} / Preenchido por: {item.name}
            </p> */}
            <button
              type="button"
              className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md bg-gray-300 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              <MailIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
              Nº: {item.id} / Preenchido por: {item.name}
            </button>
            <span className="flex justify-around">
              <UpdateButton />
              <DeleteButton />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
