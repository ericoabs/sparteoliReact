import Button from '../../Button';

export default function FillerAndOperation() {
  return (
    <>
      <h1 className="text-xl font-bold my-4">Preenchedor</h1>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Nome:
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="preenchedor"
              id="preenchedor"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="Nome do preenchedor"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Registro:
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="register"
              id="register"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder=""
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Patente:
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="patente"
              id="patente"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder=""
            />
          </div>
        </div>
      </div>
      <h1 className="text-xl font-bold my-4">Solicitante</h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Nome:
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="nomeDoSolicitante"
              id="nomeDoSolicitante"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="Nome do Solicitante"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Telefone:
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="telefoneDoSolicitante"
              id="telefoneDoSolicitante"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="Telefone do Solicitante"
            />
          </div>
        </div>
      </div>
    </>
  );
}
