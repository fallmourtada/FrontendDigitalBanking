export interface CustomJwtPayload {
    exp: number;
    iat: number;
    sub: string;
    scope: string[]; // Ou 'string' si c'est une chaîne de caractères au lieu d'un tableau
  }