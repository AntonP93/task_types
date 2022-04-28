// // массив.поиск минимального значения массива
// function findMin(array) {
//     let min = array.length ? array[0] : 0;

//     for (let i = 0; i < array.length; i++) {
//       if (array[i] < min) {
//         min = array[i];
//       }
//     }

//     console.log(`min is ${min}`);
//   }

// //массив.   средее арифметическое
// function findAvg(array) {
//     logEachElement(array);

//     let sum = 0;

//     for (let i = 0; i < array.length; i++) {
//       sum += array[i];
//     }

//     let avg = array.length ? sum / array.length : 0;

//     console.log(`avg = ${avg}`);
//   }

// // матрица(массив массивов). обращение к кажому числу матрицы
// function logEachMatrixItem(matrix) {
//     console.log('\nLog each matrix item:');
  
//     for (let i = 0; i < matrix.length; i++) {
//       for (let j = 0; j < matrix[i].length; j++) {
//         console.log(`  item {${i}, ${j}} - ${matrix[i][j]}`);
//       }
//     }
//   }
  
// матрица(массив массивов).сумма строки массива
let matrix = [ [1, 2, 3],
               [4, 5, 6],
               [7, 8, 9] ];
function showSumByRow(matrix) {
    console.log('\nShow sum by row:');
  
    let sumResults = [];
    let sum;
  
    for (let i = 0; i < matrix.length; i++) {
      sum = 0;
  
      for (let j = 0; j < matrix[i].length; j++) {
        sum += matrix[i][j];
      }
  
      sumResults.push(sum);
    }
  
    console.log('  result -', sumResults);
  }
showSumByRow(matrix);


// поиск нуля в колонке матрицы
function findColumnsWithZero(matrix) {
  // consider that we have matrix with some data

  console.log('\nFind columns with 0:');

  let columnsWithZeroIdx = [];

  let columnCount = matrix[0].length;

  for (let i = 0; i < columnCount; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[j][i] === 0) {
        columnsWithZeroIdx.push(i);
        break;
      }
    }
  }

  console.log('  result indexes -', columnsWithZeroIdx);
}

// перебор матрицы змейкой
function snakeBypass(matrix) {
  console.log('\nSnake bypass:');

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let columnIdx = i % 2 === 0 
        ? j
        : (matrix[i].length - j - 1);

      console.log( matrix[i][columnIdx] );
    }
  }
}

// вывод по главной диагонали матрциы
function logMainDiag(matrix) {
  console.log('\nMain diag:');

  for (let i = 0; i < matrix.length; i++) {
    console.log( matrix[i][i] );
  }
}
// вывод по второстепенной диагонали матрциы
function logSideDiag(matrix) {
  console.log('\nSide diag:');

  let n = matrix.length;

  for (let i = 0; i < n; i++) {
    console.log( matrix[i][n - i - 1] );
  }
}

// вывод нижнего треугольника под главной диагонлаью матрицы
function showBottomMainTriangle(matrix) {
  console.log('\nBottom main triangle:');

  let row;

  for (let i = 0; i < matrix.length; i++) {
    row = [];

    for (let j = 0; j <= i; j++) {
      // action
      row.push( matrix[i][j] );
    }

    console.log( row.join(' ') );
  }
}

// работа со стеком на примере скобок
function bracketsIssue() {
  console.log('Brackets issue:');

  const OPEN_BRACKETS = ['(', '{'];
  const BRACKETS_PAIR = {
    [')']: '(',
    ['}']: '{',
  };

  function isBracketsOk(str) {
    let stack = [];

    for (let i = 0; i < str.length; i++) {
      let currentSymbol = str[i];
      
      if (OPEN_BRACKETS.includes(currentSymbol)) {
        stack.push(currentSymbol);
      } else {
        if (stack.length === 0) {
          return false;
        }

        let topElement = stack[stack.length - 1];

        if (BRACKETS_PAIR[currentSymbol] === topElement) {
          stack.pop();
        } else {
          return false;
        }
      }
    }

    return stack.length === 0;
  }

  console.log('  check case - ()(()()) -', isBracketsOk('()(()())'));
  console.log('  check case - ())(() -', isBracketsOk('())(()'));
  console.log('  check case - (){}({}()) -', isBracketsOk('(){}({}())'));
  console.log('  check case - (}({}()) -', isBracketsOk('(}({}())'));
  console.log('  check case - ((()) -', isBracketsOk('((())'));
}