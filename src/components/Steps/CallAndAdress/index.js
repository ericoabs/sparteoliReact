import Button from '../../Button';

export default function CallAndAdress() {
  return (
    <>
      <h1 className="text-xl font-bold my-4">Data e Chamado</h1>
      <div className="grid grid-cols-4 gap-4">
        <div>
          <div>
            <label className="text-lg font-semi-bold">
              Data:
              <input
                type="date"
                name="callDate"
                dataMask="00/00/0000"
                required
                maxLength="8"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              />
            </label>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semi-bold">Horário do chamado:</h2>
          <input
            type="time"
            name="timeOfCall"
            id="timeOfCall"
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div>
          <h2 className="text-lg font-semi-bold">Horário da chegada</h2>
          <input
            type="time"
            name="arrivalTime"
            id="arrivalTime"
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div>
          <h2 className="text-lg font-semi-bold">Horário do encerramento</h2>
          <input
            type="time"
            name="endingTime"
            id="endingTime"
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="location" className="text-lg font-semi-bold">
            Meio de chamado utilizado:
          </label>
          <select
            id="contactMethod"
            name="contactMethod"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            defaultValue="default"
          >
            <option disabled selected value="default">
              Selecione uma opção
            </option>
            <option>Linha Direta</option>
            <option>CICOM</option>
          </select>
        </div>
      </div>
      <h1 className="text-xl font-bold my-4">Endereço</h1>
      <div className="grid grid-cols-4 gap-4">
        <div>
          <label htmlFor="CEP" className="text-lg font-semi-bold">
            CEP:
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="CEP"
              id="CEP"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="CEP"
            />
          </div>
        </div>
        <div>
          <label htmlFor="street" className="text-lg font-semi-bold">
            Rua:
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="street"
              id="street"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="Nome da rua"
            />
          </div>
        </div>
        <div>
          <label htmlFor="houseNumber" className="text-lg font-semi-bold">
            Número:
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="houseNumber"
              id="houseNumber"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="Número do local"
            />
          </div>
        </div>
        <div>
          <label htmlFor="neighborhood" className="text-lg font-semi-bold">
            Bairro:
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="neighborhood"
              id="neighborhood"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="Bairro"
            />
          </div>
        </div>
        <div>
          <label htmlFor="city" className="text-lg font-semi-bold">
            Cidade:
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="city"
              id="city"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="Cidade"
            />
          </div>
        </div>
        <div>
          <label htmlFor="state" className="text-lg font-semi-bold">
            Estado:
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="state"
              id="state"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="Estado"
            />
          </div>
        </div>
      </div>
      <h1 className="text-xl font-bold my-4">Solicitante</h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="text-lg font-semi-bold">
            Nome:
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="callerName"
              id="callerName"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="Nome do solicitante"
            />
          </div>
        </div>
        <div>
          <label htmlFor="phone" className="text-lg font-semi-bold">
            Telefone:
          </label>
          <div className="mt-1">
            <input
              type="tel"
              name="phone"
              id="phone"
              pattern="[0-9]{2}-[0-9]{5}-[0-9]{4}"
              required
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="Telefone do solicitante"
            />
          </div>
        </div>
      </div>
    </>
  );
}
