interface ShieldConfig {
  apiUrl: string;
}

let config: ShieldConfig | null = null;

function init(options: ShieldConfig): void {
  if (!options?.apiUrl) {
    console.warn("[ShieldSDK] apiUrl é obrigatório");
    return;
  }
  config = { apiUrl: options.apiUrl };
}

async function getToken(): Promise<string | null> {
  try {
    if (!config) throw new Error("SDK não inicializado");
    // Bloco 3: aqui entra o desafio do servidor + WASM
    return "token-placeholder";
  } catch {
    return null; // falha silenciosa: nunca derruba o site hospedeiro
  }
}

export const ShieldSDK = Object.freeze({ init, getToken });
