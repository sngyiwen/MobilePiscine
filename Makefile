.PHONY: install-all ex00 ex01 ex02 calc clean

install-all:
	cd ex00 && npm install
	cd ex01 && npm install
	cd ex02 && npm install
	cd calculator_app && npm install

ex00:
	cd ex00 && npx expo start --tunnel

ex01:
	cd ex01 && npx expo start --tunnel

ex02:
	cd ex02 && npx expo start --tunnel

calc:
	cd calculator_app && npx expo start --tunnel

clean:
	rm -rf ex00/node_modules ex01/node_modules ex02/node_modules calculator_app/node_modules
