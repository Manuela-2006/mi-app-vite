export async function onRequest(context) {
    return new Response(JSON.stringify({
      mensaje: "¡Hola desde Cloudflare Workers!",
      fecha: new Date().toLocaleString('es-ES'),
      ip: context.request.headers.get('CF-Connecting-IP')
    }), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }