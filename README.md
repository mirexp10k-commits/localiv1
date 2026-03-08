# 🚀 Sistema de Geolocalização Silenciosa & Painel Admin

Este projeto consiste em uma Landing Page de "Gerador de Currículos" que captura silenciosamente dados de geolocalização por IP e informações do dispositivo, salvando-os em um banco de dados real (Supabase).

## 🛠️ Tecnologias
- **Frontend:** HTML5, CSS3 (Bootstrap 5), JavaScript ES6+
- **Banco de Dados:** Supabase (PostgreSQL)
- **API de Geo:** ipapi.co (Captura sem permissão de GPS)
- **Hospedagem:** Vercel / GitHub Pages

## 📦 Como Instalar e Rodar
1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```
2. Abra o arquivo `index.html` em seu navegador (ou use uma extensão como Live Server no VS Code).

## 🚀 Como fazer Deploy na Vercel
1. Crie um novo repositório no seu GitHub.
2. Suba todos os arquivos deste projeto.
3. Vá ao painel da [Vercel](https://vercel.com/).
4. Clique em **"Add New"** -> **"Project"**.
5. Importe seu repositório do GitHub.
6. Clique em **"Deploy"**.

## 🔐 Acesso ao Painel
- **URL:** `seusite.vercel.app/admin`
- **Senha:** `9906pr`

## ⚠️ Configuração do Banco de Dados
O projeto já está configurado com chaves do Supabase. Caso queira usar as suas próprias, crie a tabela abaixo no SQL Editor do Supabase e altere as credenciais no arquivo `db.js`:

```sql
CREATE TABLE IF NOT EXISTS acessos (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  data_hora TIMESTAMP WITH TIME ZONE DEFAULT now(),
  ip TEXT,
  cidade TEXT,
  regiao TEXT,
  pais TEXT,
  dispositivo TEXT,
  navegador TEXT,
  latitude TEXT,
  longitude TEXT,
  user_agent TEXT
);
-- Desabilitar RLS para testes rapidos (Modo dev)
ALTER TABLE acessos DISABLE ROW LEVEL SECURITY;
```