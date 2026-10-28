# CodeMate

A real-time collaborative code editor with instant code synchronization, built-in code execution, and 1:1 voice communication for peer programming and mentorship sessions.

---

## 1. References & Resources

- **CodeMirror 6 Template:** [Quickstart Setup](https://github.com/RPGillespie6/codemirror-quickstart/blob/85e8829700c854c9597fbfe7370469c2d7eb375a/src/editor.js)
- **Socket.IO Docs:** [Socket.io v4 Documentation](https://socket.io/docs/v4/)
- **PeerJS Client:** [PeerJS Getting Started](https://peerjs.com/client/getting-started)
- **Clerk Auth:** [Clerk React Control Components](https://clerk.com/docs/react/reference/components/control/show)

---

## 2. Project Overview & Architecture

CodeMate is a full-stack real-time collaboration space designed to make technical interviews, remote pairing, and code reviews simple. Users can create shared session rooms, write code together, execute scripts in multiple languages, and talk over built-in audio without switching platforms.

---

### Core Features

- **User Authentication:** Secure access control using JWT authentication tokens.
- **Session & Room Management:** Instant workspace creation with shared room URLs and unique IDs.
- **Real-Time Code Synchronization:** Instantaneous editor synchronization across connected room peers.
- **Code Execution:** On-demand compilation and execution for C++, Python, and Java with standard output (`stdout`) and error (`stderr`) rendering.
- **1:1 Audio Calls:** Low-latency, browser-native voice communication between peers.
- **State Persistence:** Automatic session state loading and database backup across page reloads.

---

### System Architecture & Data Flow

#### Real-Time Code Syncing
Editor updates follow a client-server-client event cycle:
1. User A modifies code inside the editor component.
2. The client emits a `code-change` payload over an open Socket.IO connection.
3. The Express Socket server broadcasts the updated code buffer to room members except the original sender to prevent input echo loops.
4. User B’s local editor updates its document state upon receiving the event.

- [User A Types] ──> (Editor onChange) ──> Socket.emit('code-change')
-                                                   │
-                                           [Socket.IO Server]
-                                                   │
- [User B Editor] <── Editor.setValue() <── Socket.on('code-change')

#### WebRTC & Audio Signaling
- Socket.IO coordinates peer discovery and exchanges connection metadata (Peer IDs).
- PeerJS establishes a direct peer-to-peer WebRTC audio stream using local media devices (`navigator.mediaDevices.getUserMedia`).
- Voice traffic flows directly between browsers without routing heavy audio data through the Express backend.

#### State Persistence Strategy
- Room creation generates a dedicated MongoDB session record storing the current code state and language setting.
- Joining via `/room/:roomId` triggers a standard REST GET request to retrieve the initial saved document.
- Active changes sync dynamically via Socket.IO, with periodic background REST PUT updates to persist state across reloads.

---

### Tech Stack & Dependencies

- **Frontend:** React, React Router, CodeMirror 6 / Monaco Editor, PeerJS Client, Socket.IO Client
- **Backend:** Node.js, Express.js, Socket.IO Server, JWT, Bcrypt
- **Database:** MongoDB
- **Execution Service:** Piston API / Judge0 API
