/**
 * Demonstration-only donation logging workflow.
 *
 * This public example uses generic sheet names and field labels.
 * Do not publish live donor data, spreadsheet IDs, credentials or private URLs.
 *
 * Expected input sheet cells:
 * B3  Donor name
 * B4  Donation date
 * B5  Amount
 * B6  Payment method
 * B7  Taxpayer flag
 * B8  Address line 1
 * B9  Address line 2 / town
 * B10 Postcode
 * B11 Receipt reference
 *
 * Expected Donation_History column order:
 * Date, Name, Amount, Payment Type, Tax Payer,
 * Address Line 1, Address Line 2, Postcode,
 * Receipt Reference Number, Logged At
 */

function recordDonationDemo() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const inputSheet = spreadsheet.getSheetByName('Donation Input');
  const historySheet = spreadsheet.getSheetByName('Donation_History');

  if (!inputSheet || !historySheet) {
    SpreadsheetApp.getUi().alert(
      'Required demonstration sheets were not found.'
    );
    return;
  }

  // Read values from the demonstration form.
  const donorName = inputSheet.getRange('B3').getValue();
  const donationDate = inputSheet.getRange('B4').getValue();
  const amount = inputSheet.getRange('B5').getValue();
  const paymentType = inputSheet.getRange('B6').getValue();
  const taxpayerFlag = inputSheet.getRange('B7').getValue();
  const addressLine1 = inputSheet.getRange('B8').getValue();
  const addressLine2 = inputSheet.getRange('B9').getValue();
  const postcode = inputSheet.getRange('B10').getValue();
  const receiptReference = inputSheet.getRange('B11').getValue();

  // Basic validation before writing to the history sheet.
  if (!donorName || !amount || !receiptReference) {
    SpreadsheetApp.getUi().alert(
      'Please enter a donor name, amount and receipt reference.'
    );
    return;
  }

  if (Number(amount) <= 0) {
    SpreadsheetApp.getUi().alert(
      'The donation amount must be greater than zero.'
    );
    return;
  }

  // Append values in the same order as the documented history columns.
  historySheet.appendRow([
    donationDate,
    donorName,
    Number(amount),
    paymentType,
    taxpayerFlag,
    addressLine1,
    addressLine2,
    postcode,
    receiptReference,
    new Date()
  ]);

  SpreadsheetApp.getUi().alert(
    'Demonstration donation ' + receiptReference + ' was recorded.'
  );
}

