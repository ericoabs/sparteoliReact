/* This example requires Tailwind CSS v2.0+ */
import { TrashIcon } from '@heroicons/react/solid';

export default function DeleteButton() {
  return (
    <>
      <button
        type="button"
        className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md bg-gray-300 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 mr-4"
      >
        <TrashIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
        Deletar
      </button>
    </>
  );
}
