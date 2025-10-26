# 🍜 AI Recipe Generator

A dynamic React web application that transforms your available ingredients into a custom, suggested recipe using the power of generative AI. Say goodbye to fridge mystery—just list what you have and get cooking!

## ✨ Features

* **Intelligent Recipe Generation:** Leverages **Mistral AI** (via the Hugging Face Inference API) to suggest a relevant recipe based on your ingredient list.
* **Dynamic Ingredient List:** Easily add new ingredients via an intuitive input form.
* **Responsive UX:** The application automatically **scrolls smoothly** to display the newly generated recipe, thanks to React `useRef` and `useEffect`.
* **Markdown Formatting:** Recipes are returned and rendered in clean Markdown for easy readability.

---

## 🚀 Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

You need a few things before you can run this app:

1.  **Node.js** (v18 or higher)
2.  An **API Key** from Hugging Face for the Inference API.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [YOUR_REPO_URL]
    cd ai-recipe-generator
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Set up Environment Variables:**
    Create a file named `.env` in the root of your project and add your Hugging Face API token:
    ```
    HF_ACCESS_TOKEN="YOUR_HUGGING_FACE_TOKEN_HERE"
    ```

### Running the App

Start the development server:

```bash
npm run dev
# or
yarn dev

The application will be accessible at http://localhost:3000 (or the port specified by your development environment).
```

### 💻 Tech Stack
Frontend: React

**Styling**: Custom CSS/SASS (or specify if you use a framework like Tailwind)

**AI/Backend**: Hugging Face Inference API

**Model**: mistralai/Mixtral-8x7B-Instruct-v0.1

### 🧠 How the AI Integration Works

The recipe generation logic is encapsulated in ai.js and uses the @huggingface/inference library.

The user's ingredient list (e.g., ["chicken", "oregano", "cheese"]) is sent to the backend.

The API sends a chatCompletion request to the Mistral model with a System Prompt defining its role:

"You are an assistant that receives a list of ingredients... and suggests a recipe they could make..."

The model generates a response formatted in Markdown.
