## Başlangıç

Typescript **Compiler** aşamasında hatalarını gösterir. Compiler aşamasında çalışır.

### Kurulum

```bash
npm install -G typescript
```

şeklinde TypeScript bilgisayarınıza kurulur.

### Type Inference Özelliği

TypeScript eğer ki key’e herhangi bir type ataması yapmadıysanız, typescript keyin ilk value type’ını baz alacaktır. Örn;

```tsx
let codermungan = {
	isim : "Mehmet Halil",
	soyisim : "MUNGAN",
	yas : 30,
};
```

Burada `isim` keyi `string` , `soyisim` keyi `string` , `yas` keyi `number` alacaktır.

### Manuel type verme

Gene yukarıdaki örnekten gidecek olursak objenin içerisinde bulunan keylerinin typelarını ayarlamamız gerekmektedir. Örn;

```tsx
let codermungan: {isim: string, soyisim: string, yas: number} = {
	isim : "Mehmet Halil",
	soyisim : "MUNGAN",
	yas : 30,
};
```

ancak daha okunaklı ve güzel bir syntax ile yazmamız gerekirse `interface` özelliğini yada `type` özelliğini kullanabiliriz. Örn;

```tsx
// Objelerin type'ını oluştururken kullanımı daha yaygındır.
interface Coder {
	isim: string,
	soyisim: string,
	yas: number,
};

// Fonksiyon typelarını oluştururken kullanımı daha yaygındır.
type Coder = {
	isim: string,
	soyisim: string,
	yas: number,
};

let codermungan : Coder = {
	isim : "Mehmet Halil",
	soyisim : "MUNGAN",
	yas : 30,
};
```

### !!! Dikkat

- Objelerde type’lama yaptığınız `key` eğer ki objenizde kullanılmayacaksa hata verecektir. Çünkü `inference` özelliği onun direk type’nı variable olarak tanımladı. Ancak bu durumun da önüne geçebiliriz. Örn;

```tsx
interface Coder {
	isim: string,
	soyisim: string,
	yas?: number,
};

let codermungan: Coder = {
	isim: "Mehmet Halil",
	soyisim: "MUNGAN",
}
```

şeklinde yazdığımızda `yas` keyi versenizde olur vermeseniz de olur. Bu özelliğe `Optional Property` denmektedir. İsteğe bağlı özellik!

## Ufak Çaplı Trickler

1. İki veya daha fazla type alabilme durumu (**Union Types**):

```tsx
type Role = boolean | number; // Boolean yada Number olabilir.

interface User {
	name: string;
	password: string;
	role?: Role; // role Optional Property Boolen veya Number alabilir.
}
```

2. Variable atama ve eşleştirme (**Literal Types**):

```tsx
type Isim = "Mehmet Halil" | "Mehmet Halil MUNGAN" | "CoderMungan"

interface Coder {
	isim: Isim,
	soyisim: string,
	yas: number,
};

let codermungan : Coder = {
	isim : "Mehmet Halil",
	soyisim : "MUNGAN",
	yas : 30,
};
```

## Generic Types
- Will soon!