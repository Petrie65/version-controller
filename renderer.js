const information = document.getElementById("info");

const func = async () => {
    console.log("pinging...");
	const response = await window.versions.ping();
	console.log(response); // prints out 'pong'
};

information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`;

func();
