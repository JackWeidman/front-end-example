import React, { useState } from "react";
import Button from "../components/Button";
import Header from "../components/Header";
import Form from "../components/Form";
import Modal from "../components/Modal";

function HomePage() {
  const [isOpen, setModalOpen] = useState(false);

  return (
    <div className="App">
      <Header />
      <Modal isOpen={isOpen} onClose={() => setModalOpen(false)}>
        <Form onClose={() => setModalOpen(false)} />
      </Modal>
      <Button onClick={() => setModalOpen(true)} className="">
        Submit Feedback!
      </Button>
    </div>
  );
}

export default HomePage;
