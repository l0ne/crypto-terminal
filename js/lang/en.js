var app = app || {};

app.lang = app.lang || {};

app.lang['en'] = (function() {

	return {
		'language.cs': 'Czech',
		'language.en': 'English',
		'language.es': 'Spanish',
		'language.fr': 'French',
		'main.message.status.0': 'Error: Network seems to be down',
		'admin.title': 'Admin',
		'admin.general-settings.label': 'General settings',
		'admin.payment-history.label': 'Payment History',
		'admin.pin.label': 'Admin PIN',
		'admin.pin.description': 'Prevents unauthorized access to administrative areas',
		'admin.pin.set-pin.title': 'Set PIN',
		'admin.pin.change-pin.title': 'Change PIN',
		'admin.pin.set': 'Set',
		'admin.pin.change': 'Change',
		'admin.pin.remove': 'Remove',
		'admin.pin.min-length': 'PIN must be at least {{minLength}} digit(s)',
		'settings.display-currency.label': 'Display Currency',
		'settings.date-format.label': 'Date Format',
		'settings.number-format.label': 'Number Format',
		'settings.accept-crypto-currencies.label': 'Which currencies do you want to accept?',
		'settings.at-least-one-crypto-currency-required': 'Please configure at least one cryptocurrency',
		'settings.field-required': '{{label}} is required',
		'pay-enter-amount.description': 'Enter amount to be paid',
		'pay-enter-amount.continue': 'Continue',
		'pay-enter-amount.valid-number': 'Amount must be a valid number',
		'pay-enter-amount.greater-than-zero': 'Amount must be greater than zero.',
		'pay-choose-method.description': 'Select payment method',
		'pay-choose-method.cancel': 'Cancel',
		'pay-address.description': 'Scan the QR code to pay',
		'pay-address.timeout': 'Timed out while waiting for payment',
		'pay-address.missing-payment-id': 'Missing payment ID',
		'pay-address.cancel': 'Cancel',
		'pay-address.back': 'Back',
		'payment-history.failed-to-get-payment-data': 'Failed to load payment data',
		'payment-history.empty': 'No payments yet.',
		'payment-details.title': 'Payment Details',
		'payment-details.label.status': 'Status',
		'payment-details.label.timestamp': 'Date',
		'payment-details.label.amount': 'Amount',
		'payment-details.back': 'Back',
		'payment-request.data.must-be-object': '"data" must be an object.',
		'payment-confirmation.message': 'Thanks!',
		'payment-confirmation.done': 'Done',
		'sample-addresses.label': 'Sample Addresses:',
		'enter-pin.cancel': 'Cancel',
		'enter-pin.submit': 'Enter',
		'pin-required.title': 'PIN Required',
		'pin-required.instructions': 'Enter the admin PIN to continue',
		'pin-required.incorrect': 'The PIN you entered was incorrect',
		'device.camera.not-available': 'Device camera not available',
		'payment-timed-out.message': 'Timed out',
		'payment-timed-out.ok': 'Ok',
	};

})();
