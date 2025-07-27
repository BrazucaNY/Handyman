import * as zod from "../vendors/zod-3.22.4.js";

const translations = {
  INVALID_DATE: {
    ar: "تاريخ غير صالح",
    cs: "Neplatné datum",
    da: "Ugyldig dato",
    de: "Ungültiges Datum",
    en: "Invalid date",
    es: "Fecha inválida",
    fa: "تاریخ نامعتبر",
    fi: "Virheellinen päivämäärä",
    fr: "Date invalide",
    he: "תאריך לא חוקי",
    id: "Tanggal tidak valid",
    it: "Data non valida",
    ja: "無効な日付",
    ko: "유효하지 않은 날짜",
    nl: "Ongeldige datum",
    no: "Ugyldig dato",
    pl: "Nieprawidłowa data",
    pt: "Data inválida",
    ro: "Dată invalidă",
    ru: "Неверная дата",
    sv: "Ogiltigt datum",
    th: "วันที่ไม่ถูกต้อง",
    tr: "Geçersiz tarih",
    uk: "Недійсна дата",
    vi: "Ngày không hợp lệ",
    zh: "无效日期",
  },
  INVALID_TIME: {
    ar: "وقت غير صالح",
    cs: "Neplatný čas",
    da: "Ugyldig tid",
    de: "Ungültige Zeit",
    en: "Invalid time",
    es: "Hora inválida",
    fa: "زمان نامعتبر",
    fi: "Virheellinen aika",
    fr: "Heure invalide",
    he: "שעה לא חוקית",
    id: "Waktu tidak valid",
    it: "Ora non valida",
    ja: "無効な時間",
    ko: "유효하지 않은 시간",
    nl: "Ongeldige tijd",
    no: "Ugyldig tid",
    pl: "Nieprawidłowy czas",
    pt: "Tempo inválido",
    ro: "Timp invalid",
    ru: "Неверное время",
    sv: "Ogiltig tid",
    th: "เวลาไม่ถูกต้อง",
    tr: "Geçersiz zaman",
    uk: "Недійсний час",
    vi: "Thời gian không hợp lệ",
    zh: "无效时间",
  },
  INVALID_PHONE: {
    ar: "رقم هاتف غير صالح، تحقق من إدخال رمز البلد.",
    cs: "Neplatné telefonní číslo, zkontrolujte, zda je zadán kód země.",
    da: "Ugyldigt telefonnummer, kontrollér om landekoden er angivet.",
    de: "Ungültige Telefonnummer, überprüfen Sie, ob die Ländervorwahl angegeben ist.",
    en: "Invalid phone number, check if country code is provided.",
    es: "Número de teléfono inválido, compruebe si se ha proporcionado el código de país.",
    fa: "شماره تلفن نامعتبر، بررسی کنید که کد کشور ارائه شده است.",
    fi: "Virheellinen puhelinnumero, tarkista onko maakoodi annettu.",
    fr: "Numéro de téléphone invalide, vérifiez si le code pays est fourni.",
    he: "מספר טלפון לא חוקי, בדוק אם קוד המדינה מסופק.",
    id: "Nomor telepon tidak valid, periksa apakah kode negara disediakan.",
    it: "Numero di telefono non valido, controlla se è stato fornito il codice paese.",
    ja: "電話番号が無効です。国コードが提供されているか確認してください。",
    ko: "유효하지 않은 전화번호입니다. 국가 코드가 제공되었는지 확인하세요.",
    nl: "Ongeldig telefoonnummer, controleer of de landcode is opgegeven.",
    no: "Ugyldig telefonnummer, sjekk om landskode er oppgitt.",
    pl: "Nieprawidłowy numer telefonu, sprawdź czy podany jest kod kraju.",
    pt: "Número de telefone inválido, verifique se o código do país é fornecido.",
    ro: "Număr de telefon invalid, verificați dacă este furnizat codul țării.",
    ru: "Неверный номер телефона, проверьте, указан ли код страны.",
    sv: "Ogiltigt telefonnummer, kontrollera om landskod anges.",
    th: "หมายเลขโทรศัพท์ไม่ถูกต้อง โปรดตรวจสอบว่ามีรหัสประเทศหรือไม่",
    tr: "Geçersiz telefon numarası, ülke kodunun verilip verilmediğini kontrol edin.",
    uk: "Недійсний номер телефону, перевірте, чи вказано код країни.",
    vi: "Số điện thoại không hợp lệ, kiểm tra xem mã quốc gia đã được cung cấp chưa.",
    zh: "电话号码无效，请检查是否提供了国家/地区代码。",
  },
  INVALID_EMAIL: {
    ar: "بريد إلكتروني غير صالح",
    cs: "Neplatný email",
    da: "Ugyldig e-mail",
    de: "Ungültige E-Mail",
    en: "Invalid email",
    es: "Correo electrónico inválido",
    fa: "ایمیل نامعتبر",
    fi: "Virheellinen sähköposti",
    fr: "E-mail invalide",
    he: "אימייל לא חוקי",
    id: "Email tidak valid",
    it: "Email non valida",
    ja: "無効なメールアドレス",
    ko: "유효하지 않은 이메일",
    nl: "Ongeldige e-mail",
    no: "Ugyldig e-post",
    pl: "Nieprawidłowy email",
    pt: "Email inválido",
    ro: "Email invalid",
    ru: "Неверный адрес электронной почты",
    sv: "Ogiltig e-post",
    th: "อีเมลไม่ถูกต้อง",
    tr: "Geçersiz e-posta",
    uk: "Недійсна електронна пошта",
    vi: "Email không hợp lệ",
    zh: "无效的电子邮件",
  },
  REQUIRED_FIELD: {
    ar: "هذا الحقل مطلوب",
    cs: "Toto pole je povinné",
    da: "Dette felt er påkrævet",
    de: "Dieses Feld ist erforderlich",
    en: "This field is required",
    es: "Este campo es obligatorio",
    fa: "این فیلد الزامی است",
    fi: "Tämä kenttä on pakollinen",
    fr: "Ce champ est requis",
    he: "שדה זה הוא חובה",
    id: "Bidang ini wajib diisi",
    it: "Questo campo è obbligatorio",
    ja: "このフィールドは必須です",
    ko: "이 필드는 필수입니다",
    nl: "Dit veld is verplicht",
    no: "Dette feltet er påkrevd",
    pl: "To pole jest wymagane",
    pt: "Este campo é obrigatório",
    ro: "Acest câmp este obligatoriu",
    ru: "Это поле обязательно",
    sv: "Detta fält är obligatoriskt",
    th: "จำเป็นต้องกรอกช่องนี้",
    tr: "Bu alan gereklidir",
    uk: "Це поле є обов'язковим",
    vi: "Trường này là bắt buộc",
    zh: "此字段为必填项",
  },
  NOT_IN_PREVIEW: {
    ar: "هذه الميزة غير متوفرة في وضع المعاينة.",
    cs: "Tato funkce není k dispozici v režimu náhledu.",
    da: "Denne funktion er ikke tilgængelig i forhåndsvisning.",
    de: "Diese Funktion ist im Vorschaumodus nicht verfügbar.",
    en: "This feature is not available in preview mode.",
    es: "Esta función no está disponible en el modo de vista previa.",
    fa: "این ویژگی در حالت پیش‌نمایش در دسترس نیست.",
    fi: "Tämä ominaisuus ei ole käytettävissä esikatselutilassa.",
    fr: "Cette fonctionnalité n'est pas disponible en mode aperçu.",
    he: "תכונה זו אינה זמינה במצב תצוגה מקדימה.",
    id: "Fitur ini tidak tersedia dalam mode pratinjau.",
    it: "Questa funzionalità non è disponibile in modalità anteprima.",
    ja: "この機能はプレビューモードでは利用できません。",
    ko: "이 기능은 미리보기 모드에서 사용할 수 없습니다.",
    nl: "Deze functie is niet beschikbaar in de voorbeeldmodus.",
    no: "Denne funksjonen er ikke tilgjengelig i forhåndsvisningsmodus.",
    pl: "Ta funkcja nie jest dostępna w trybie podglądu.",
    pt: "Este recurso não está disponível no modo de visualização.",
    ro: "Această funcție nu este disponibilă în modul de previzualizare.",
    ru: "Эта функция недоступна в режиме предварительного просмотра.",
    sv: "Denna funktion är inte tillgänglig i förhandsgranskningsläge.",
    th: "คุณสมบัตินี้ไม่พร้อมใช้งานในโหมดแสดงตัวอย่าง",
    tr: "Bu özellik önizleme modunda mevcut değil.",
    uk: "Ця функція недоступна в режимі попереднього перегляду.",
    vi: "Tính năng này không khả dụng trong chế độ xem trước.",
    zh: "此功能在预览模式下不可用。",
  },
  ERROR_SENDING_MESSAGE: {
    ar: "حدث خطأ أثناء إرسال رسالتك. الرجاء المحاولة مرة أخرى لاحقًا.",
    cs: "Při odesílání vaší zprávy došlo k chybě. Zkuste to prosím znovu později.",
    da: "Der opstod en fejl ved afsendelse af din besked. Prøv igen senere.",
    de: "Beim Senden Ihrer Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.",
    en: "There was an error sending your message. Please try again later.",
    es: "Se produjo un error al enviar su mensaje. Por favor, inténtelo de nuevo más tarde.",
    fa: "خطایی در ارسال پیام شما رخ داد. لطفاً بعداً دوباره امتحان کنید.",
    fi: "Viestin lähettämisessä tapahtui virhe. Yritä myöhemmin uudelleen.",
    fr: "Une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer plus tard.",
    he: "אירעה שגיאה בשליחת ההודעה שלך. אנא נסה שוב מאוחר יותר.",
    id: "Terjadi kesalahan saat mengirim pesan Anda. Silakan coba lagi nanti.",
    it: "Si è verificato un errore durante l'invio del messaggio. Si prega di riprovare più tardi.",
    ja: "メッセージの送信中にエラーが発生しました。後でもう一度お試しください。",
    ko: "메시지를 보내는 중에 오류가 발생했습니다. 나중에 다시 시도해 주세요.",
    nl: "Er is een fout opgetreden bij het verzenden van uw bericht. Probeer het later opnieuw.",
    no: "Det oppstod en feil ved sending av meldingen din. Vennligst prøv igjen senere.",
    pl: "Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie później.",
    pt: "Ocorreu um erro ao enviar a sua mensagem. Por favor, tente novamente mais tarde.",
    ro: "A apărut o eroare la trimiterea mesajului. Vă rugăm să încercați din nou mai târziu.",
    ru: "При отправке вашего сообщения произошла ошибка. Пожалуйста, попробуйте позже.",
    sv: "Det uppstod ett fel när ditt meddelande skickades. Försök igen senare.",
    th: "เกิดข้อผิดพลาดในการส่งข้อความของคุณ โปรดลองอีกครั้งในภายหลัง",
    tr: "Mesajınız gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.",
    uk: "Під час надсилання повідомлення сталася помилка. Будь ласка, спробуйте пізніше.",
    vi: "Đã xảy ra lỗi khi gửi tin nhắn của bạn. Vui lòng thử lại sau.",
    zh: "发送消息时出错。请稍后再试。",
  },
  MESSAGE_SENT_SUCCESSFULLY: {
    ar: "تم إرسال رسالتك بنجاح!",
    cs: "Vaše zpráva byla úspěšně odeslána!",
    da: "Din besked er blevet sendt med succes!",
    de: "Ihre Nachricht wurde erfolgreich gesendet!",
    en: "Your message has been sent sucessfully!",
    es: "¡Tu mensaje ha sido enviado con éxito!",
    fa: "پیام شما با موفقیت ارسال شد!",
    fi: "Viestisi on lähetetty onnistuneesti!",
    fr: "Votre message a été envoyé avec succès!",
    he: "ההודעה שלך נשלחה בהצלחה!",
    id: "Pesan Anda telah berhasil dikirim!",
    it: "Il tuo messaggio è stato inviato con successo!",
    ja: "メッセージが正常に送信されました！",
    ko: "메시지가 성공적으로 전송되었습니다!",
    nl: "Uw bericht is succesvol verzonden!",
    no: "Meldingen din er sendt!",
    pl: "Twoja wiadomość została wysłana pomyślnie!",
    pt: "Sua mensagem foi enviada com sucesso!",
    ro: "Mesajul tău a fost trimis cu succes!",
    ru: "Ваше сообщение успешно отправлено!",
    sv: "Ditt meddelande har skickats framgångsrikt!",
    th: "ข้อความของคุณถูกส่งเรียบร้อยแล้ว!",
    tr: "Mesajınız başarıyla gönderildi!",
    uk: "Ваше повідомлення успішно надіслано!",
    vi: "Tin nhắn của bạn đã được gửi thành công!",
    zh: "您的消息已成功发送！",
  },
};

const getTranslation = (key) => {
  const urlPath = window.location.pathname;
  const urlLanguageMatch = urlPath.match(/^\/([a-z]{2})\//);
  const urlLanguage = urlLanguageMatch ? urlLanguageMatch[1] : null;

  const langCodeMetas = document.querySelectorAll('meta[name="langCode"]');
  const langCodeMeta = langCodeMetas.length > 0 ? langCodeMetas[langCodeMetas.length - 1] : null;
  const langCode = langCodeMeta ? langCodeMeta.getAttribute("content") : null;

  const browserLanguage = navigator.language || navigator.userLanguage;
  const browserLang = browserLanguage ? browserLanguage.split("-")[0] : null;

  const language = urlLanguage || langCode || browserLang || "en";

  return translations[key][language] || translations[key].en;
};

const zodValidators = {
  textOptional: zod.string().optional(),
  textRequired: zod.string().nonempty({
    message: getTranslation("REQUIRED_FIELD"),
  }),
  checkboxRequired: zod.string().transform((value) => value === "on", { message: getTranslation("REQUIRED_FIELD") }),
  email: zod.string().email({
    message: getTranslation("INVALID_EMAIL"),
  }),
  date: zod.string().refine((value) => !isNaN(Date.parse(value)), { message: getTranslation("INVALID_DATE") }),
  time: zod.string().refine((value) => !isNaN(Date.parse(`01/01/2000 ${value}`)), {
    message: getTranslation("INVALID_TIME"),
  }),
  phone: zod.string().regex(/^\+?\d{1,3}[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,4}$/, {
    message: getTranslation("INVALID_PHONE"),
  }),
};

function validateFormData(values, validationSchema) {
  try {
    validationSchema.parse(values);
    return [true, null];
  } catch (error) {
    if (error instanceof zod.ZodError) {
      console.error("Validation errors:", error.errors);
    } else {
      console.error("Non validation error:", error);
    }
    return [false, error.errors];
  }
}

const submitListener = (e) => {
  e.preventDefault();
  sendData(e.target);
};

const attachSubmitListenerToSingleForm = (form) => {
  form.removeEventListener("submit", submitListener);
  form.addEventListener("submit", submitListener);
};

export const attachSubmitFormListeners = () => {
  [...document.getElementsByTagName("form")].forEach((form) => {
    attachSubmitListenerToSingleForm(form);
  });
};

export const sendData = async (form) => {
  if (document.querySelector('div[data-preview="true"]')) return alert(getTranslation("NOT_IN_PREVIEW"));

  const submitButton = form.querySelectorAll("button")[0];
  const formData = new FormData(form);
  const formDataJson = Object.fromEntries(formData.entries());

  const entries = [];
  const inputs = form.querySelectorAll("input, textarea");
  inputs.forEach((input) => {
    const validator = input.getAttribute("data-validator");
    const name = input.getAttribute("name");
    if (validator) {
      if (zodValidators[validator]) entries.push([name, zodValidators[validator]]);
    }
  });
  const selects = form.querySelectorAll("select");
  selects.forEach((select) => {
    const validator = select.getAttribute("data-validator");
    const name = select.getAttribute("name");
    if (validator) {
      if (zodValidators[validator]) entries.push([name, zodValidators[validator]]);
    }
  });

  const validationSchema = zod.object(Object.fromEntries(entries));
  const [isValid, errors] = validateFormData(formDataJson, validationSchema);

  form.querySelectorAll("span").forEach((span) => {
    if (span.id && span.id.startsWith(`error-`)) {
      span.remove();
    }
  });

  if (!isValid) {
    if (!errors) {
      alert(getTranslation("ERROR_SENDING_MESSAGE"));

      return {
        status: "error",
        data: [],
      };
    }

    errors.forEach((error) => {
      const key = error.path[0];
      const errorSpan = form.querySelector(`#error-${key}`);
      if (errorSpan) {
        errorSpan.innerHTML = error.message;
      } else {
        const errorSpan = document.createElement("span");
        errorSpan.id = `error-${key}`;
        errorSpan.innerHTML = error.message;
        errorSpan.style.color = "red";
        errorSpan.style.display = "block";
        const input = form.querySelector(`[name="${key}"]`);
        input.parentNode.insertBefore(errorSpan, input.nextSibling);
      }
    });

    return {
      status: "error",
      data: [],
    };
  }

  const metaTag = document.querySelector('meta[name="projectId"]');
  const projectId = metaTag.getAttribute("content");

  const resetForm = () => {
    form.reset();
  };

  const disableButton = () => {
    submitButton.disabled = true;
    submitButton.style.cursor = "not-allowed";
    submitButton.style.opacity = "0.5";
  };

  const enableButton = () => {
    submitButton.disabled = false;
    submitButton.style.cursor = "pointer";
    submitButton.style.opacity = "1";
  };

  try {
    disableButton();

    await fetch(`/api/v1/template/form/submit`, {
      method: "POST",
      body: JSON.stringify({ formDataJson, formId: form.id || "default", projectId }),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      credentials: "include",
    });

    alert(getTranslation("MESSAGE_SENT_SUCCESSFULLY"));
    return { status: "success", data: formDataJson };
  } catch (error) {
    alert(getTranslation("ERROR_SENDING_MESSAGE"));
    return { status: "error", data: [] };
  } finally {
    resetForm();
    enableButton();
  }
};

attachSubmitFormListeners();
