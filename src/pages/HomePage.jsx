import React, { useState } from "react";
import Button from "../components/Button";
import Header from "../components/Header";
import Form from "../components/EmailForm";
import Modal from "../components/Modal";
import BookList from "../components/Books/BookTable";
function HomePage() {
  const [isOpen, setModalOpen] = useState(false);

  return (
    <div className="App">
      <Header />
      <Modal isOpen={isOpen} onClose={() => setModalOpen(false)}>
        <Form onClose={() => setModalOpen(false)} />
      </Modal>
      <BookList />
      <div className="flex justify-center mb-8">
        <Button onClick={() => setModalOpen(true)} className="items-center">
          Submit Feedback!
        </Button>
      </div>
    </div>
  );
}

export default HomePage;
