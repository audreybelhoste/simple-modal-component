A simple & lightweight method of displaying modal windows.

## Installation

To install, you can use npm or yarn:

$ npm install simple-modal-component
$ yarn add simple-modal-component

## Usage

```import { useState } from "react";
import Modal from "@simple-modal-component-ab/Modal";

export const Exemple = () => {
	const [isOpened, setIsOpened] = useState(false);

	return(	
		<Modal
			isOpened={isOpened}
			onClose={() => setIsOpened(false)}
		>
			<p>Your text here</p>
		</Modal>
	)
}```