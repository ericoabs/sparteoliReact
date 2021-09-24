import Button from '../../Button';

export default function LocationAndDetails() {
  return (
    <>
      <h1 className="text-xl font-bold my-4">Data e Chamado</h1>
      <div className="grid grid-cols-1">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            CEP:
          </label>
          <div className="mt-1">
            <textarea
              type="text-area"
              name="email"
              id="email"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md h-80"
              placeholder="you@example.com"
            ></textarea>
          </div>
        </div>
      </div>
      <h1 className="text-xl font-bold my-4">Local</h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Caracteristicas do local:
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="email"
              id="email"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="you@example.com"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Uso do local:
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="email"
              id="email"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="you@example.com"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            É local de preservação:
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="email"
              id="email"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="you@example.com"
            />
          </div>
        </div>
      </div>
    </>
  );
}
