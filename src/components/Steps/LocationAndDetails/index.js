import Button from '../../Button';

export default function LocationAndDetails() {
  return (
    <>
      <h1 className="text-xl font-bold my-4">Resumo</h1>
      <div className="grid grid-cols-1">
        <div>
          <label htmlFor="details" className="text-lg font-semi-bold">
            Detalhes da ocorrência:
          </label>
          <div className="mt-1">
            <textarea
              type="text-area"
              name="details"
              id="details"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md h-28"
              placeholder="Detalhes da ocorrência"
            ></textarea>
          </div>
        </div>
      </div>
      <h1 className="text-xl font-bold my-4">Local</h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="local" className="text-lg font-semi-bold">
            Caracteristicas do local:
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="local"
              id="local"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder=""
            />
          </div>
        </div>
        <div>
          <label htmlFor="details" className="text-lg font-semi-bold">
            Uso do local:
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="localUse"
              id="localUse"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder=""
            />
          </div>
        </div>
        <div>
          <label htmlFor="details" className="text-lg font-semi-bold">
            É local de preservação:
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="preservationLocation"
              id="preservationLocation"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
