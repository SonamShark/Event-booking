# 🪪 Decentralized Event Ticket Booking System using Self-Sovereign Identity (SSI)

This is a web-based ticket booking platform that integrates **Self-Sovereign Identity (SSI)** to verify user credentials (like Name and ID) through decentralized identity wallets. The system enables event access only after verifying a user's foundational credentials via QR code scanning.

---

## 🚀 Features

- 🔐 **SSI-Based Identity Verification**
  - Uses Aries Framework JS (AFJ) to issue proof requests.
  - Verifies user credentials like `Name` and `ID` from SSI-compatible wallets.

- 🧾 **QR Code Integration**
  - Dynamically generates a QR code with an out-of-band (OOB) invitation.
  - Wallet apps scan QR to share verifiable credentials securely.

- 🔄 **Real-Time Proof Polling**
  - Polls the proof status every 2 seconds.
  - Fetches credential attributes upon successful verification.

- 🎟️ **Ticket Booking System**
  - Users must verify identity before booking.
  - Displays ticket and user info after verification.

- 🌐 **Modern Frontend**
  - Built with **Next.js** and **Tailwind CSS**.
  - Uses `qrcode` library for generating QR codes.
  - Beautiful UI with loading indicators, feedback messages, and redirect flow.

---

## 🧱 Tech Stack

| Layer        | Technology                        |
|--------------|-----------------------------------|
| Frontend     | Next.js, Tailwind CSS, TypeScript |
| QR Generator | `qrcode` NPM package              |
| Backend      | Node.js, Express.js, Aries Framework JS |
| Wallet       | Sovrin-compatible wallet (e.g., Trinsic, Indicio, etc.) |
| Transport    | HTTP + OOB Invitations            |

---

## 🧩 System Architecture

[Frontend: Next.js]

    ↓
Display QR (OOB invitation)

    ↓
[User scans with wallet]

    ↓
[Wallet responds with credentials]

    ↓
[Backend: Aries Agent (AFJ)]
    → Creates Proof Request
    → Polls for Status
    → Extracts Attributes
    
    ↓
Frontend displays verified data + grants ticket
