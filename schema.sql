-- Enable UUID extension for unique identifiers
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. USERS TABLE
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    full_name VARCHAR(100) NOT NULL,
    avatar_url TEXT,
    level INT DEFAULT 1,
    spirits INT DEFAULT 100,           -- "أرواح" (Energy/Lives used to play)
    dnc_balance DECIMAL(18, 4) DEFAULT 0.0000, -- "رصيد DNC"
    total_games_played INT DEFAULT 0,  -- "عدد الألعاب"
    total_spirits_earned INT DEFAULT 0,-- "أرواح مكتسبة"
    wallet_address VARCHAR(42),        -- Linked Web3 Wallet (0x...)
    language VARCHAR(10) DEFAULT 'ar', -- Preferred language (ar / en)
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. QUIZ CATEGORIES TABLE
CREATE TABLE categories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name_ar VARCHAR(100) NOT NULL,     -- e.g., "الجغرافيا"
    name_en VARCHAR(100) NOT NULL,
    icon_url TEXT,
    is_active BOOLEAN DEFAULT TRUE
);

-- 3. QUIZ QUESTIONS & ANSWERS TABLE
CREATE TABLE questions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    category_id UUID REFERENCES categories(id) ON DELETE CASCADE,
    question_text_ar TEXT NOT NULL,    -- e.g., "ما هي عاصمة فرنسا؟"
    question_text_en TEXT,
    option_a VARCHAR(255) NOT NULL,    -- "برلين"
    option_b VARCHAR(255) NOT NULL,    -- "باريس"
    option_c VARCHAR(255) NOT NULL,    -- "مدريد"
    option_d VARCHAR(255) NOT NULL,    -- "روما"
    correct_option CHAR(1) NOT NULL,   -- 'B'
    points_reward INT DEFAULT 10,
    time_limit_seconds INT DEFAULT 30,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 4. GOOGLE REWARDED ADS WATCH LOGS
CREATE TABLE ad_watch_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    ad_network VARCHAR(50) DEFAULT 'Google AdMob',
    reward_spirits INT DEFAULT 100,    -- "+100 أرواح إضافية"
    watched_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 5. DANAT COIN REDEMPTION REQUESTS (ADMIN APPROVAL QUEUE)
CREATE TYPE redemption_status AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

CREATE TABLE redemption_requests (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    spirits_deducted INT NOT NULL,     -- e.g., 1000 Spirits
    dnc_amount_requested DECIMAL(18, 4) NOT NULL, -- e.g., 1 DNC
    wallet_address VARCHAR(42) NOT NULL, -- User's linked wallet
    status redemption_status DEFAULT 'PENDING',
    tx_hash VARCHAR(66),               -- Blockchain transaction hash upon admin approval
    admin_notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    processed_at TIMESTAMP WITH TIME ZONE
);

-- 6. GAME SESSIONS & LEADERBOARD LOGS
CREATE TABLE game_sessions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    score INT DEFAULT 0,
    spirits_spent INT DEFAULT 1,
    dnc_earned DECIMAL(18, 4) DEFAULT 0.0000,
    completed_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- INDEXES FOR FAST LEADERBOARD QUERIES
CREATE INDEX idx_users_dnc_balance ON users (dnc_balance DESC);
CREATE INDEX idx_game_sessions_score ON game_sessions (score DESC);
