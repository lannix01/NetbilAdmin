// Function to fetch public IP address
async function fetchPublicIP() {
    try {
        const response = await fetch('https://api.ipify.org?format=json'); // Example API to get public IP
        const data = await response.json();
        document.getElementById("ipAddress").innerText = `IP Address: ${data.ip}`;
    } catch (error) {
        document.getElementById("ipAddress").innerText = "Error fetching IP";
        console.error("Error fetching IP address:", error);
    }
  }
  
  // Function to fetch MAC address (using a local API or a library)
  async function fetchMACAddress() {
    try {
        // This is a placeholder. Replace with actual implementation to get MAC address.
        const macAddress = "00:00:00:00:00:00"; // Example MAC address
        document.getElementById("macAddress").innerText = `MAC Address: ${macAddress}`;
    } catch (error) {
        document.getElementById("macAddress").innerText = "Error fetching MAC address";
        console.error("Error fetching MAC address:", error);
    }
  }
  
  // Function to fetch connected devices from router
  async function fetchConnectedDevices() {
    try {
        const response = await fetch('http://192.168.0.1/settings/wireless_statistics', {
            method: 'GET',
            headers: {
                'Authorization': 'Basic ' + btoa('am6100:am6100') // Base64 encoded username:password
            }
        });
        const data = await response.json();
        document.getElementById("connectedDevices").innerText = `Connected Devices: ${data.summary}`;
    } catch (error) {
        document.getElementById("connectedDevices").innerText = "Error fetching connected devices";
        console.error("Error fetching connected devices:", error);
    }
  }
  
  // Initialize functions
  fetchPublicIP();
  fetchMACAddress();
  fetchConnectedDevices();