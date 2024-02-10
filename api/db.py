from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

engine = create_engine('postgresql://postgres:pass@localhost:5432/docdone')
Session = sessionmaker(bind=engine, autoflush=False)