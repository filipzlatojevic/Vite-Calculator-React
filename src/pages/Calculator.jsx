/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import { TableRow, Button, Input, Select } from '../components';

function Calculator() {
  const [resultsPage, setResultsPage] = useState(false);
  const [incomeType, setIncomeType] = useState('');
  const [selectedOption, setSelectedOption] = useState('1');
  const [selectedOptionResults, setSelectedOptionResults] = useState(selectedOption);
  const [inputValue, setInputValue] = useState('');
  const [grossWeek, setGrossWeek] = useState(0);
  const [disabledBtn, setDisabledBtn] = useState(false);
  const [focused, setFocused] = useState(false);
  const tax = 0.15;

  useEffect(() => {
    if (inputValue === '0' || !inputValue || !incomeType) {
      setDisabledBtn(true);
    } else {
      setDisabledBtn(false);
    }
  }, [inputValue, incomeType]);

  const handleCalculate = e => {
    e.preventDefault();

    if (inputValue === '0' || !inputValue || !incomeType) {
      return;
    }

    if (incomeType && inputValue) {
      if (incomeType === 'net') {
        setGrossWeek(parseFloat(inputValue) / (1 - tax) / parseFloat(selectedOption));
      } else if (incomeType === 'gross') {
        setGrossWeek(parseFloat(inputValue) / parseFloat(selectedOption));
      }

      setResultsPage(true);
    }
  };

  return (
    <section className="bg-gradient-to-tr from-[#13547a] to-[#80d0c7] w-full min-h-[100vh] flex flex-col items-center justify-start sm:px-[30px] px-[10px] sm:pb-[30px] pb-[10px]">
      <div className="w-full mt-[70px] flex items-start justify-center">
        <section className="w-[38px] shrink-0 flex items-center flex-col justify-start gap-[10px]">
          <a
            onClick={() => setResultsPage(false)}
            style={{ writingMode: 'vertical-rl' }}
            className={`${
              !resultsPage ? 'bg-[#6fff5f40] border-[#6fff5f40]' : 'bg-[#0000004d] border-[#0000004d]'
            } cursor-pointer block hover:border-btnGreen border-r-4 shadow-[5px_0_25px_0_rgba(0,0,0,0.30)] rotate-180  
            text-white pr-[3px] pl-[7px] rounded-br-[6px] rounded-tr-[6px] py-[20px]`}>
            Income details
          </a>
          <a
            onClick={() => setResultsPage(true)}
            style={{ writingMode: 'vertical-rl' }}
            className={`${
              resultsPage ? 'bg-[#6fff5f40] border-[#6fff5f40]' : 'bg-[#0000004d] border-[#0000004d]'
            } cursor-pointer hover:border-btnGreen border-r-4 shadow-[5px_0_25px_0_rgba(0,0,0,0.30)] rotate-180 
           text-white pr-[3px] pl-[7px] rounded-br-[6px] rounded-tr-[6px] py-[20px]`}>
            Income
          </a>
        </section>
        <section className="bg-[#0000004d] border-[2px] border-btnGreen px-[20px] gap-[20px] flex flex-col justify-start items-start z-10 max-w-[900px] w-full min-h-[500px] shadow-[0_0_25px_0_rgba(0,0,0,0.30)] rounded-b-md rounded-tr-md">
          <div className="w-full pt-[20px] flex flex-wrap gap-[10px] items-center justify-between">
            <div className="flex items-center text-white justify-start gap-[10px] text-[22px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16">
                {' '}
                <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z" />{' '}
                <path d="M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4z" />{' '}
              </svg>
              Income tax calculator
            </div>

            <ReactHTMLTableToExcel
              id="test-table-xls-button"
              className={`${!resultsPage && 'hidden'} flex justify-center items-center py-[5px] px-[12px] 
              rounded-md font-medium min-[450px]:w-auto w-full text-base cursor-pointer border-[2px] text-white 
               border-oceanBlue bg-oceanBlue hover:bg-[#00000000] hover:text-oceanBlue`}
              table="table-to-xls"
              filename="Income Table"
              sheet="Income Table"
              buttonText="Download"
            />
          </div>

          {!resultsPage && (
            <form className="w-full max-w-[500px]">
              <label htmlFor="income" className="block text-[18px] font-normal text-white">
                What is your total income?
              </label>

              <div>
                <div className="relative mt-[10px] rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="text-gray-500 sm:text-sm">$</span>
                  </div>
                  <Input onBlur={() => setFocused(true)} value={inputValue} onChange={e => setInputValue(e.target.value)} />

                  <div className="absolute inset-y-0 right-0 flex items-center">
                    <Select value={selectedOption} onChange={e => setSelectedOption(e.target.value)} />
                  </div>
                </div>
                <span className={`${!inputValue && focused ? 'visible' : 'invisible'} text-red-500 text-[15px]`}>
                  Please, enter your income.
                </span>
              </div>
              <div className="text-[18px]  mt-[10px] font-normal text-white">Please choose the income type</div>
              <div className="w-full flex min-[450px]:flex-row flex-col gap-[10px] mt-[10px]">
                <Button
                  moreClass={`flex-1 whitespace-nowrap text-white border-gray-300 hover:border-btnGreen ${
                    incomeType === 'gross' && 'bg-btnGreen text-white border-btnGreen'
                  }`}
                  onClick={() => setIncomeType('gross')}>
                  Gross income
                </Button>
                <Button
                  moreClass={`flex-1 whitespace-nowrap text-white border-gray-300 hover:border-btnGreen ${
                    incomeType === 'net' && 'bg-btnGreen text-white border-btnGreen'
                  } `}
                  onClick={() => setIncomeType('net')}>
                  Net income
                </Button>
              </div>
              <Button
                disabled={disabledBtn}
                type="submit"
                onClick={handleCalculate}
                moreClass={`${
                  disabledBtn ? 'bg-gray-400' : 'bg-btnGreen hover:bg-btnHoverGreen border-btnGreen'
                } mt-[20px] w-full text-white`}>
                Calculate
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ml-2" viewBox="0 0 16 16">
                  {' '}
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />{' '}
                </svg>
              </Button>
            </form>
          )}

          {resultsPage && (
            <aside className="bg-[#6fff5f40] rounded-md w-full mb-[20px] min-h-[400px] p-[15px]">
              <div className="flex flex-wrap items-center gap-[5px]">
                <span className="inline-block shadow-md px-[17px] py-[6px] text-[20px] text-white rounded-md bg-btnGreen">
                  ${Math.round(grossWeek * (1 - tax) * selectedOptionResults).toLocaleString()}{' '}
                </span>
                <span className="text-white">
                  is your net{' '}
                  <Select
                    value={selectedOptionResults}
                    onChange={e => setSelectedOptionResults(e.target.value)}
                    moreClass=" underline cursor-pointer border-btnGreen border bg-[#00000050] mr-1 text-white"
                  />
                  income
                </span>
              </div>

              <div>
                <table
                  id="table-to-xls"
                  className="bg-[#00000030] border-[2px] border-btnGreen shadow-md rounded-md p-[10px] pb-0 flex flex-col mt-[30px] g:overflow-visible 
        overflow-auto">
                  <thead className="sm:block hidden">
                    <tr className="text-white flex justify-between w-full text-base px-[10px] font-bold sm:mb-[12px] mb-[0] text-left">
                      <th className="w-[25%]">Frequency</th>
                      <th className="w-[25%]">Gross Income</th>
                      <th className="w-[25%]">Tax</th>
                      <th className="w-[25%]">Net Income</th>
                    </tr>
                  </thead>

                  <tbody>
                    <TableRow
                      freq="Daily"
                      gross={(grossWeek / 7).toFixed(2).toLocaleString()}
                      tax={((grossWeek / 7) * tax).toFixed(2).toLocaleString()}
                      net={((grossWeek / 7) * (1 - tax)).toFixed(2).toLocaleString()}
                    />
                    <TableRow
                      freq="Weekly"
                      gross={Math.round(grossWeek).toLocaleString()}
                      tax={Math.round(grossWeek * tax).toLocaleString()}
                      net={Math.round(grossWeek * (1 - tax)).toLocaleString()}
                    />
                    <TableRow
                      freq="Fortnightly"
                      gross={Math.round(grossWeek * 2).toLocaleString()}
                      tax={Math.round(grossWeek * 2 * tax).toLocaleString()}
                      net={Math.round(grossWeek * 2 * (1 - tax)).toLocaleString()}
                    />
                    <TableRow
                      freq="Monthly"
                      gross={Math.round(grossWeek * 4).toLocaleString()}
                      tax={Math.round(grossWeek * 4 * tax).toLocaleString()}
                      net={Math.round(grossWeek * 4 * (1 - tax)).toLocaleString()}
                    />
                    <TableRow
                      freq="Quarterly"
                      gross={Math.round(grossWeek * 4 * 3).toLocaleString()}
                      tax={Math.round(grossWeek * 4 * 3 * tax).toLocaleString()}
                      net={Math.round(grossWeek * 4 * 3 * (1 - tax)).toLocaleString()}
                    />
                    <TableRow
                      freq="Half-Yearly"
                      gross={Math.round(grossWeek * 4 * 6).toLocaleString()}
                      tax={Math.round(grossWeek * 4 * 6 * tax).toLocaleString()}
                      net={Math.round(grossWeek * 4 * 6 * (1 - tax)).toLocaleString()}
                    />
                    <TableRow
                      freq="Annually"
                      gross={Math.round(grossWeek * 48).toLocaleString()}
                      tax={Math.round(grossWeek * 48 * tax).toLocaleString()}
                      net={Math.round(grossWeek * 48 * (1 - tax)).toLocaleString()}
                    />
                  </tbody>
                </table>
              </div>
            </aside>
          )}
        </section>
      </div>
    </section>
  );
}

export default Calculator;
