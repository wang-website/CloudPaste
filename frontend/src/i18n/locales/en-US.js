export default {
  app: {
    title: "CloudPaste",
    slogan: "Securely share your content",
  },
  nav: {
    home: "Home",
    upload: "Upload",
    admin: "Admin",
  },
  theme: {
    toggle: "Toggle Theme",
    dark: "Dark Mode",
    light: "Light Mode",
  },
  language: {
    toggle: "Change Language",
    zh: "Chinese",
    en: "English",
  },
  footer: {
    copyright: "CloudPaste © {year} - Securely share your content",
  },
  markdown: {
    title: "Markdown Editor",
    placeholder: "Please enter Markdown content... For code: use ctrl+shift+V to paste the original text, as ctrl+V will automatically wrap it in a code block.",
    save: "Save",
    share: "Share",
    download: "Download",
    preview: "Preview",
    edit: "Edit",
    permissionRequired: "You need to login as admin or use an API key with text permission. Please",
    loginOrAuth: "login/authorize",
    createShare: "Create Share",
    processing: "Processing...",
    shareLink: "Share Link:",
    copyLink: "Copy Link",
    copyRawLink: "Copy Raw Link",
    rawLinkCopied: "Raw link copied to clipboard",
    showQRCode: "Show QR Code",
    disappearIn: "seconds to disappear",
    qrCodeTitle: "Share QR Code",
    qrCodeGenerating: "Generating...",
    qrCodeScanToAccess: "Scan QR code to access",
    downloadQRCode: "Download QR Code",
    linkCopied: "Link copied to clipboard",
    copyFailed: "Failed to copy link",
    autoSaved: "Auto-saved...",
    errorNoPermission: "Error: You don't have permission to create text shares",
    errorEmptyContent: "Error: Content cannot be empty",
    creatingShare: "Creating share...",
    shareCreatedSuccess: "Share created successfully!",
    errorPermissionDenied: "Error: You don't have permission to create shares. Please check API key permissions or login again",
    errorPrefix: "Error",
    errorCreateShareFailed: "Failed to create share",
    qrCodeDownloaded: "QR code downloaded",
    onlyAllowedChars: "Only letters, numbers, - and _ are allowed",
    invalidFormat: "Invalid format, only letters, numbers, - and _ are allowed",
    form: {
      remark: "Remark (Optional)",
      remarkPlaceholder: "Add remark information...",
      customLink: "Link Suffix (Optional)",
      customLinkPlaceholder: "Leave empty for auto-generation",
      password: "Password Protection",
      passwordPlaceholder: "Optional",
      expireTime: "Expiration Time",
      expireOptions: {
        hour1: "1 Hour",
        day1: "1 Day",
        day7: "7 Days",
        day30: "30 Days",
        never: "Never Expire",
      },
      maxViews: "Max Views (0 for unlimited)",
      maxViewsPlaceholder: "0 means unlimited",
    },
  },
  file: {
    upload: "Upload File",
    select: "Select File",
    drag: "Drag files here to upload",
    password: "Password",
    passwordPlaceholder: "Enter password",
    submit: "Submit",
    loading: "Loading...",
    error: "Error",
    success: "Success",
    view: "File Share",
    storage: "Storage Configuration",
    path: "Storage Path",
    pathPlaceholder: "custom/folder/path",
    shareSettings: "Share Settings",
    remark: "Remark(Optional)",
    remarkPlaceholder: "Add remark information...",
    customLink: "Custom Link(Optional)",
    customLinkPlaceholder: "your-custom-link",
    maxViews: "Max Views(0 for unlimited)",
    maxViewsPlaceholder: "Leave empty or fill 0 for unlimited",
    expireTime: "Expiration",
    expireOptions: {
      hour1: "1 Hour",
      day1: "1 Day",
      day7: "7 Days",
      day30: "30 Days",
      never: "Never Expire",
    },
    passwordProtection: "Password(Optional)",
    upload: "Upload",
    cancel: "Cancel Upload",
    uploadProgress: "Upload Progress",
    maxSizeExceeded: "File size exceeds limit, maximum allowed is {size}",
    negativeMaxViews: "Access times cannot be negative",
    uploadSuccessful: "File uploaded successfully!",
    insufficientStorage: "Insufficient storage space",
    fileSize: "File Size",
    clearSelected: "Clear Selected File",
    uploadSpeed: "Upload Speed",
    accessCount: "Access Count",
    remainingViews: "Remaining Views",
    unlimited: "Unlimited",
    usedUp: "Used Up",
    downloadFile: "Download File",
    copyLink: "Copy Link",
    copyDirectLink: "Copy Direct Link",
    directLinkCopied: "Direct link copied",
    deleteFile: "Delete File",
    editFile: "Edit File",
    cancelMessage: "File upload canceled",
    selectStorage: "Please select storage",
    noStorage: "No available storage",
    // File list related texts
    recentUploads: "Recent Uploads",
    showingRecent: "Showing last 3 records",
    noFilesUploaded: "No files uploaded yet",
    uploadToShow: "Files will appear here after upload",
    fileName: "File Name",
    fileType: "Type",
    remainingViewsLabel: "Views Left",
    createdAt: "Created At",
    actions: "Actions",
    encrypted: "Encrypted",
    noPassword: "No PW",
    open: "Open",
    qrCode: "QR Code",
    remainingCount: "{count}",
    confirmDelete: "Confirm Delete",
    confirmDeleteMessage: "Are you sure you want to delete this file? This action cannot be undone.",
    confirmDeleteBtn: "Confirm Delete",
    deleting: "Deleting...",
    fileQrCode: "File Link QR Code",
    downloadQrCode: "Download QR Code",
    deletedSuccess: "File deleted successfully",
    deletedRedirectMsg: "Returning to the homepage shortly",
    redirectCountdown: "Redirecting in {seconds} seconds",
    deleteFailed: "Delete failed: {message}",
    permissionRequired: "You need to login as admin or use an API key with file permission. Please",
    loginOrAuth: "login/authorize",
    linkCopied: "Link copied to clipboard",
    copyFailed: "Failed to copy link",
    loadingFilesError: "Failed to load file list: {message}",
    uploadPageTitle: "File Upload",
    qrCodeDownloadSuccess: "QR code download started",
    delete: "Delete",
    onlyAllowedChars: "Only letters, numbers, - and _ are allowed",
    invalidFormat: "Invalid format, only letters, numbers, - and _ are allowed",
    noValidLink: "This file doesn't have a valid link",
    getFileDetailFailed: "Failed to get file details",
    cannotGetDirectLink: "Cannot get direct link. Please make sure you're logged in and try refreshing the page",
    cannotGetProxyLink: "Cannot get file proxy link",
    copyPermanentLinkFailed: "Failed to copy permanent download link",
    getPasswordFromSessionError: "Error getting password from session storage",
    // Multiple file upload related
    multipleFilesSupported: "Multiple files supported",
    selectedFiles: "Selected {count} files",
    clearAll: "Clear All",
    uploadMultiple: "Upload {count} Files",
    allUploadsFailed: "All file uploads failed",
    someUploadsFailed: "Some files failed to upload: {count} files with errors",
    multipleUploadsSuccessful: "All {count} files uploaded successfully!",
    pending: "Pending",
    uploading: "Uploading",
    success: "Success",
    error: "Error",
    noFilesToUpload: "No new files to upload",
    slugConflict: "Link suffix is already taken, please try another one",
    allSlugConflicts: "All files failed to upload: Link suffixes are already taken",
    someSlugConflicts: "{count} files failed to upload: Link suffixes are already taken",
    retry: "Retry",
    retrySuccessful: "File retry upload successful!",
  },
  paste: {
    view: "Text Share",
    password: "Password Protected Content",
    passwordProtected: "This text share is password protected. Please enter the password to view the content.",
    copy: "Copy Content",
    outline: "Outline",
    shareSettings: "Share Settings",
    remark: "Remark",
    remarkPlaceholder: "Add remark information...",
    customLink: "Custom Link",
    customLinkPlaceholder: "your-custom-link",
    password: "Password",
    passwordPlaceholder: "Leave empty for no password",
    expireTime: "Expiration Time",
    expireOptions: {
      hour1: "1 Hour",
      day1: "1 Day",
      day7: "7 Days",
      day30: "30 Days",
      never: "Never Expire",
    },
    accessCount: "Access Count",
    remainingViews: "Remaining Views",
  },
  common: {
    back: "Back",
    cancel: "Cancel",
    confirm: "Confirm",
    delete: "Delete",
    edit: "Edit",
    save: "Save",
    close: "Close",
    required: "Required",
    optional: "Optional",
    loading: "Loading...",
    unknownError: "Unknown error",
  },
  errors: {
    passwordRequired: "Password is required",
    passwordIncorrect: "Incorrect password, please try again",
    notFound: "Not Found",
    expired: "Expired",
    serverError: "Server Error",
  },
  // Dashboard
  dashboard: {
    systemOverview: "System Overview",
    refresh: "Refresh",
    loading: "Loading...",
    fetchError: "Failed to fetch data, please try again later",
    totalPastes: "Text Shares",
    totalFiles: "File Uploads",
    totalApiKeys: "API Keys",
    totalS3Configs: "Storage Configs",
    storageUsage: "Storage Usage",
    storageBuckets: "Storage Buckets",
    selectBucket: "Select Bucket",
    allBuckets: "All Buckets",
    storageBucketDistribution: "Storage Bucket Distribution",
    noStorageBucketData: "No storage bucket data available",
    otherStorage: "Other Storage",
    weeklyActivity: "Last 7 Days Activity",
    serverEnvironment: "Server Environment",
    dataStorage: "Data Storage Service",
    lastUpdated: "Data Update Time",
    switchToLineChart: "Switch to Line Chart",
    switchToBarChart: "Switch to Bar Chart",
    weeklyPastes: "Weekly Text Shares",
    weeklyFiles: "Weekly File Uploads",
    mostActiveDate: "Most Active Date",
    highestDailyActivity: "Highest Daily Activity",
    activityOverview: "Activity Overview",
    items: "items",
  },
  mimetype: {
    markdown: "Markdown Document",
    image: "Image",
    jpeg: "JPEG Image",
    png: "PNG Image",
    gif: "GIF Animation",
    webp: "WebP Image",
    svg: "SVG Vector",
    tiff: "TIFF Image",
    bmp: "BMP Bitmap",
    ico: "ICO Icon",
    heic: "HEIC Efficient Image",
    video: "Video",
    mp4: "MP4 Video",
    webm: "WebM Video",
    avi: "AVI Video",
    mov: "MOV Video",
    wmv: "WMV Video",
    mkv: "MKV Video",
    threegp: "3GP Video",
    audio: "Audio",
    mp3: "MP3 Audio",
    m4a: "M4A Audio",
    wav: "WAV Audio",
    ogg: "OGG Audio",
    flac: "FLAC Lossless Audio",
    aac: "AAC Audio",
    pdf: "PDF Document",
    spreadsheet: "Spreadsheet",
    document: "Document",
    unknown: "Unknown Type",
  },
  fileStats: {
    bytes: "Bytes",
    kb: "KB",
    mb: "MB",
    gb: "GB",
    tb: "TB",
  },
  // Admin Panel
  admin: {
    title: {
      admin: "Admin System",
      user: "User Panel",
    },
    sidebar: {
      dashboard: "Dashboard",
      textManagement: "Text Management",
      fileManagement: "File Management",
      storageConfig: "S3 Storage Config",
      keyManagement: "Key Management",
      settings: "System Settings",
      logout: "Logout",
      logoutAuth: "Logout Auth",
      menuTitle: {
        admin: "Admin System Menu",
        user: "User Panel Menu",
      },
      openMenu: "Open Menu",
      closeMenu: "Close Menu",
    },
    permissionDenied: {
      title: "Permission Denied",
      message: "Sorry, the API key you are using does not have permission to access the control panel.",
      suggestion: "Please login with an administrator account, or check other features available with your current API key.",
    },
    login: {
      adminLogin: "Admin Login",
      apiKeyAuth: "API Key Authorization",
      username: "Username",
      password: "Password",
      apiKey: "API Key",
      loginButton: "Login",
      useAdminAccount: "Use Admin Account",
      useApiKey: "Use API Key",
      loggingIn: "Logging in...",
      inputRequired: {
        usernamePassword: "Please enter username and password",
        apiKey: "Please enter API key",
      },
      errors: {
        invalidToken: "Login data format error, token not found",
        loginFailed: "Login failed, please check username and password",
        invalidResponse: "Server returned invalid response format, please check API config",
        serverError: "Server error",
        keyValidationFailed: "Key validation failed",
        permissionInfo: "Cannot get key permission information",
        keyValidationFailed: "Key validation failed, please check API key and server config",
      },
    },
    settings: {
      title: "System Settings",
      description: "Manage your system's global settings and admin account information",
      uploadSettings: {
        title: "Upload Limits",
        description: "Configure maximum file size for user uploads",
        maxUploadSizeLabel: "Maximum Upload Size",
        maxUploadSizePlaceholder: "Enter maximum allowed size",
        maxUploadSizeHint: "Set the maximum file size users can upload. Recommended: 64-100MB.",
        unitKB: "KB",
        unitMB: "MB",
        unitGB: "GB",
        footerHint: "This setting applies to all user file uploads",
      },
      adminSettings: {
        title: "Admin Information",
        description: "Change administrator account credentials",
        newUsernameLabel: "New Username",
        newUsernamePlaceholder: "Enter new username",
        newUsernameHint: "Leave empty to keep current username",
        currentPasswordLabel: "Current Password",
        currentPasswordPlaceholder: "Enter current password",
        currentPasswordHint: "Enter your current admin password",
        newPasswordLabel: "New Password",
        newPasswordPlaceholder: "Enter new password",
        newPasswordHint: "Leave empty to keep current password",
        footerHint: "After updating account info, you will be logged out and need to log in again",
      },
      status: {
        success: "System settings updated successfully!",
        adminUpdateSuccess: "Information updated successfully! System will log you out in 3 seconds. Please login again with new credentials.",
        processing: "Processing...",
        updateSettings: "Update Settings",
        updateAccount: "Update Account",
        errors: {
          maxUploadSizeError: "Maximum upload size must be a positive integer",
          updateSettingsError: "Failed to update system settings",
          currentPasswordRequired: "Current password is required",
          newFieldRequired: "Please fill in either new password or new username",
          updateInfoError: "Failed to update information",
          passwordSame: "New password cannot be the same as current password",
        },
      },
    },
    keyManagement: {
      title: "Key Management",
      refresh: "Refresh",
      lastRefreshed: "Last refreshed",
      bulkDelete: "Bulk Delete",
      delete: "Delete",
      create: "Create New Key",
      createShort: "Create",
      keyName: "Key Name",
      key: "Key",
      permissions: "Permissions",
      createdAt: "Created At",
      expiresAt: "Expires At",
      lastUsed: "Last Used",
      actions: "Actions",
      edit: "Edit",
      loading: "Loading...",
      loadingKeys: "Loading keys...",
      noKeysTitle: "No API Keys Created Yet",
      noKeysDescription: "API keys can be used by third-party applications to access your CloudPaste service",
      copyKey: "Copy",
      copyKeyFull: "Copy Key",
      textPermission: "Text",
      filePermission: "File",
      textPermissionFull: "Text Permission",
      filePermissionFull: "File Permission",
      noPermission: "No Permissions",
      neverExpires: "Never Expires",
      neverUsed: "Never Used",
      deleteConfirm: "Are you sure you want to delete this key? This action cannot be undone.",
      bulkDeleteConfirm: "Are you sure you want to delete {count} selected keys? This action cannot be undone.",
      selectKeysFirst: "Please select keys to delete first",
      error: {
        loadFailed: "Failed to load keys, please try again later",
        cannotLoadList: "Unable to load API key list",
        bulkDeleteFailed: "Bulk delete failed, please try again later",
        deleteFailed: "Failed to delete key, please try again later",
        copyFailed: "Copy failed, please copy manually",
      },
      success: {
        bulkDeleted: "Successfully deleted {count} keys",
        deleted: "Key deleted successfully",
        copied: "Key copied to clipboard",
        created: "API key created successfully. Please copy and save it now.",
        updated: "API key updated successfully",
      },
      createModal: {
        title: "Create New API Key",
        close: "Close",
        keyName: "Key Name",
        keyNamePlaceholder: "e.g., Web App, Mobile API",
        keyNameHelp: "Give your API key a meaningful name for future identification",
        useCustomKey: "Use Custom Key",
        customKey: "Custom Key",
        customKeyPlaceholder: "Letters, numbers, dashes and underscores only",
        customKeyHelp: "Set a custom key, e.g.: sk-123",
        expiration: "Expiration",
        expiration1d: "1 Day",
        expiration7d: "7 Days",
        expiration30d: "30 Days",
        expirationNever: "Never Expires",
        expirationCustom: "Custom Expiration Date",
        permissions: {
          text: "Text Permission",
          file: "File Permission",
        },
        securityTip: "Security Tip",
        securityMessage: "API keys have operational permissions. Keep your key secure after creation.",
        cancel: "Cancel",
        create: "Create Key",
        processing: "Processing...",
        errors: {
          nameRequired: "Please enter a key name",
          customKeyRequired: "Please enter a custom key",
          customKeyFormat: "Key can only contain letters, numbers, dashes, and underscores",
          expirationRequired: "Please select a custom expiration date",
          createFailed: "Failed to create key",
        },
      },
      editModal: {
        title: "Edit API Key",
        cancel: "Cancel",
        update: "Update Key",
        processing: "Processing...",
        errors: {
          nameRequired: "Please enter a key name",
          expirationRequired: "Please select a custom expiration date",
          updateFailed: "Failed to update key",
        },
      },
    },
  },
};
